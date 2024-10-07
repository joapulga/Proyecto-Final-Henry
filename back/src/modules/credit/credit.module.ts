import { Module } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditController } from './credit.controller';
import { Credit } from './entities/credit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Credit])//importar la entidad Share
],
  controllers: [CreditController],
  providers: [CreditService],
})
export class CreditModule {}
