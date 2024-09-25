import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
<<<<<<< HEAD
export class AuthModule {}
=======
export class AuthModule {}
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
