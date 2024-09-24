import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CreditModule } from './credit/credit.module';
import { ShareModule } from './share/share.module';
import { StatesModule } from './states/states.module';
import { BalanceModule } from './balance/balance.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import typeOrmConfig from './config/typeorm'
import { JwtModule } from '@nestjs/jwt';
import { CloudinaryService } from './service/cloudinary/cloudinary.service';

@Module({
  imports: [
    UserModule, 
    CreditModule, 
    ShareModule, 
    StatesModule, 
    BalanceModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('typeorm')
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      global: true,
      signOptions: {
        expiresIn: "1h"
      }
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, CloudinaryService],
})
export class AppModule {}