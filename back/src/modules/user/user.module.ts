import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FileUploadModule } from 'src/file-upload/file-upload.module';
import { FileUploadService } from 'src/file-upload/file-upload.service';
import { CloudinaryService } from 'src/service/cloudinary/cloudinary.service';
import { requiresAuth } from 'express-openid-connect';


@Module({
  imports: [
    FileUploadModule,
    TypeOrmModule.forFeature([User])//importar la entidad User 
],
  controllers: [UserController],
  providers: [UserService, FileUploadService, CloudinaryService],
})
export class UserModule implements NestModule {
configure(consumer: MiddlewareConsumer) {
  consumer.apply(requiresAuth()).forRoutes('users/auth0/protected');
  }
}
