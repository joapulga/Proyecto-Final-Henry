import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FileUploadModule } from 'src/file-upload/file-upload.module';

@Module({
  imports: [
   // FileUploadModule,
    TypeOrmModule.forFeature([User])//importar la entidad User 
],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
