// credit.module.ts
import { Module } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditController } from './credit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credit } from './entities/credit.entity';
import { StatesService } from 'src/state/states.service';
import { ShareService } from 'src/share/share.service';
import { State } from 'src/state/entities/state.entity';
import { Share } from 'src/share/entities/share.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { FileUploadService } from 'src/file-upload/file-upload.service';
import { CloudinaryModule } from '../service/cloudinary/cloudinary.module'; // Import CloudinaryModule
import { CloudinaryService } from 'src/service/cloudinary/cloudinary.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Credit, State, Share, User]),
    CloudinaryModule // Import CloudinaryModule
  ],
  controllers: [CreditController],
  providers: [CreditService,  FileUploadService, StatesService, ShareService, UserService, CloudinaryService] // Include CloudinaryService as a provider
})
export class CreditModule {}