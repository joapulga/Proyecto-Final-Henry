import { Module } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { BalanceController } from './balance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Balance } from './entities/balance.entity';

@Module({
  imports: [
    // FileUploadModule,
     TypeOrmModule.forFeature([Balance])//importar la entidad User 
 ],
  controllers: [BalanceController],
  providers: [BalanceService],
})
export class BalanceModule {}
