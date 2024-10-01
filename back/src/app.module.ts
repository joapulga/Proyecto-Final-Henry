import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CreditModule } from './credit/credit.module';
import { ShareModule } from './share/share.module';
import { StateModule } from './state/states.module';
import { BalanceModule } from './balance/balance.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import typeOrmConfig from './config/typeorm'
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    UserModule, 
    CreditModule, 
    ShareModule, 
    StateModule, 
    BalanceModule,
    MailerModule.forRoot({
      transport: {
        host: 'mail.softdesarrolladores.com',
        port: 465,
        secure: true,
        auth: {
            user: 'henry@softdesarrolladores.com',
            pass: '96WmmXAj$DW_'
        }
      },
      defaults: {
        from: '"nest-modules" henry@softdesarrolladores.com'
      },
      template: {
        dir: process.cwd() + '/templates/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        }
      }
    }),
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
  providers: [AppService],
})
export class AppModule {}
