import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FileUploadModule } from 'src/file-upload/file-upload.module';
<<<<<<< HEAD
import { FileUploadService } from 'src/file-upload/file-upload.service';
import { CloudinaryService } from 'src/service/cloudinary/cloudinary.service';

@Module({
  imports: [
    FileUploadModule,
    TypeOrmModule.forFeature([User])//importar la entidad User 
],
  controllers: [UserController],
  providers: [UserService, FileUploadService, CloudinaryService],
=======

@Module({
  imports: [
   // FileUploadModule,
    TypeOrmModule.forFeature([User])//importar la entidad User 
],
  controllers: [UserController],
  providers: [UserService],
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
})
export class UserModule {}
