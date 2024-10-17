import { Body } from '@nestjs/common';
import { Request } from 'express';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateAuth0Dto } from './dto/auth0-auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  // @UseGuards(AuthGuard('google'))
  async googleLogin(@Req() req: Request) {
    const {given_name, family_name, email} = req.oidc.user
    const createAuth0Dto: CreateAuth0Dto = {name: given_name, lastname: family_name, email: email}
    return this.authService.auth0Login(createAuth0Dto)
  }
  @Post('signin')
  async signin(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signin(createAuthDto);
  }


  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    const usuerloged = this.authService.singup(createUserDto);
    return usuerloged;
  }

}