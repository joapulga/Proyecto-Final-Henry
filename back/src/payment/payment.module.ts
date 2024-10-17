import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { MercadoPagoConfigProvider } from 'src/config/mercado-pago';


@Module({
  controllers:[PaymentController],
  providers: [PaymentService, MercadoPagoConfigProvider],
  exports: [PaymentService],

})
export class PaymentModule {}