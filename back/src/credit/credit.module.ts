import { Module } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditController } from './credit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credit } from './entities/credit.entity';

@Module({
  imports: [
    // FileUploadModule,
     TypeOrmModule.forFeature([Credit])//importar la entidad User 
 ],
  controllers: [CreditController],
  providers: [CreditService],
})
export class CreditModule {}
