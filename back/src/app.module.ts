import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CreditModule } from './modules/credit/credit.module';
import { ShareModule } from './modules/share/share.module';
import { StatesModule } from './modules/states/states.module';
import { BalanceModule } from './modules/balance/balance.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import typeOrmConfig from './config/typeorm'
import { JwtModule } from '@nestjs/jwt';
import { CloudinaryService } from './service/cloudinary/cloudinary.service';
import { PaymentModule } from './payment/payment.module';


@Module({
  imports: [
    UserModule, 
    CreditModule, 
    ShareModule, 
    StatesModule, 
    BalanceModule,
    PaymentModule,
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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, CloudinaryService],
})
export class AppModule {}