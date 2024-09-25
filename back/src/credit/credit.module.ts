import { Module } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditController } from './credit.controller';
<<<<<<< HEAD
import { Credit } from './entities/credit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Credit])//importar la entidad Share
],
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credit } from './entities/credit.entity';

@Module({
  imports: [
    // FileUploadModule,
     TypeOrmModule.forFeature([Credit])//importar la entidad User 
 ],
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
  controllers: [CreditController],
  providers: [CreditService],
})
export class CreditModule {}
