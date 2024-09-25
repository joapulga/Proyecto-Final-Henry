import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthRepository } from './auth.repository';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {

  constructor(private authRepository: AuthRepository){}

  async signin(createAuthDto: CreateAuthDto){
    return await this.authRepository.singIn(createAuthDto)
  }

  async singup(createUserDto: CreateUserDto){
    return await this.authRepository.singUp(createUserDto)
  }
  
<<<<<<< HEAD
}
=======
}
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
