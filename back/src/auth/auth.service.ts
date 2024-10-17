import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthRepository } from './auth.repository';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateAuth0Dto } from './dto/auth0-auth.dto';

@Injectable()
export class AuthService {

  constructor(private authRepository: AuthRepository){}

  async signin(createAuthDto: CreateAuthDto){
    return await this.authRepository.singIn(createAuthDto)
  }

  async singup(createUserDto: CreateUserDto){
    return await this.authRepository.singUp(createUserDto)
  }

  async auth0Login(createAuth0Dto: CreateAuth0Dto){
    return await this.authRepository.auth0Login(createAuth0Dto)
  }
  
}