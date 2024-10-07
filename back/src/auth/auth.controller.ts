import { Body } from '@nestjs/common';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateAuthDto } from './dto/create-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @UseGuards(AuthGuard('google'))
  async googleLogin(@Req() req) {
    // El usuario ya ha sido autenticado por Auth0
    return { message: 'Logged in successfully!', user: req.user };
  }
  @Post('signin')
  async signin(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signin(createAuthDto);
  }


  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    const usuerloged = this.authService.singup(createUserDto);
    console.log(usuerloged);
    return usuerloged;
  }

}