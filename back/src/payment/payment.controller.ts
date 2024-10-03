import { Controller, Post, Body, HttpException, HttpStatus, Res, Inject } from '@nestjs/common';
import { CreatePaymentDto } from './dto/createPreference_dto';
import { PaymentService } from './payment.service';
import MercadoPagoConfig, { Preference } from 'mercadopago';
import { MercadoPagoConfigProvider } from 'src/config/mercado-pago';
import mercadopago from 'mercadopago';

@Controller('payment')
export class PaymentController {
    constructor(
        private readonly paymentService: PaymentService,
        @Inject(MercadoPagoConfigProvider) private readonly mercadoPagoConfig: MercadoPagoConfig,
    ) {}

    @Post('create')
    async createPreference(@Body() createPreferenceDto: CreatePaymentDto, @Res() res) {
        try {
            const preference = await this.paymentService.createPreference(createPreferenceDto);
            console.log(preference);
           // return res.json({ preferenceId: preference.id });
           return res.json({ preferenceId: preference.id, init_point: preference.init_point });
        } catch (error) {
            console.error(error);
            throw new HttpException('Error creating preference', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}