import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
<<<<<<< HEAD

=======
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() createAuthDto: CreateAuthDto) {
<<<<<<< HEAD
    const userIned = this.authService.signin(createAuthDto);
    console.log(userIned);
    return userIned;
=======
    return this.authService.signin(createAuthDto);
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
  }

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
<<<<<<< HEAD
    const usuerloged = this.authService.singup(createUserDto);
    console.log(usuerloged);
    return usuerloged;
  }

}
=======
    return this.authService.singup(createUserDto);
  }

}
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
