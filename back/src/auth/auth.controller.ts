import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() createAuthDto: CreateAuthDto) {
    const userIned = this.authService.signin(createAuthDto);
    console.log(userIned);
    return userIned;
  }

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    const usuerloged = this.authService.singup(createUserDto);
    console.log(usuerloged);
    return usuerloged;
  }

}