import { Module } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { BalanceController } from './balance.controller';
<<<<<<< HEAD
import { Balance } from './entities/balance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Balance])//importar la entidad Balance
],
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { Balance } from './entities/balance.entity';

@Module({
  imports: [
    // FileUploadModule,
     TypeOrmModule.forFeature([Balance])//importar la entidad User 
 ],
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
  controllers: [BalanceController],
  providers: [BalanceService],
})
export class BalanceModule {}
