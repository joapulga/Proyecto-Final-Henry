import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { State } from 'src/state/entities/state.entity';
import { MailService } from 'src/service/mail/mail.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, State])],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, MailService],
})
export class AuthModule {}