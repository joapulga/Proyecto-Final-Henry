import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CreditModule } from './credit/credit.module';
import { ShareModule } from './share/share.module';
import { BalanceModule } from './balance/balance.module';
import { StatesModule } from './states/states.module';
import { CloudinaryService } from './service/cloudinary/cloudinary.service';
import { AuthModule } from './auth/auth.module';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [UserModule, CreditModule, ShareModule, BalanceModule, StatesModule, AuthModule, FileUploadModule],
  controllers: [AppController],
  providers: [AppService, CloudinaryService],
})
export class AppModule {}
