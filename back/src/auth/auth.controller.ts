import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { EmailService } from 'src/service/email/email.service';
import { MailerService } from '@nestjs-modules/mailer';
import { Subject } from 'rxjs';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private emailService: MailerService) {}

  @Post('signin')
  async signin(@Body() createAuthDto: CreateAuthDto) {
    await this.emailService.sendMail({
      to: 'jefferson-camacho@hotmail.com',
      from: 'henry@softdesarrolladores.com', 
      subject: 'Asunto',
      text:  'Texto de prueba',
      html: '<b>WELCOME</b>'})
      .then( (success) => {
        console.log(success)
      }).catch((error) => {
        console.log(error)
      })
    return this.authService.signin(createAuthDto);
  }

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.singup(createUserDto);
  }

}
