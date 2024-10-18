import { Injectable } from '@nestjs/common';
import MercadoPagoConfig, { Preference } from 'mercadopago';
import { MercadoPagoConfigProvider } from '../config/mercado-pago';
import { CreatePaymentDto } from './dto/createPreference_dto';
import { CreatePreferenceDto } from './dto/createPreferenceDto';

@Injectable()
export class PaymentService {
  constructor(private readonly mercadoPagoConfig: MercadoPagoConfigProvider) {}

  async createPreference(createPaymentDto: CreatePaymentDto, id: string) {
    const client = new MercadoPagoConfig({
      accessToken:
        'APP_USR-8101026874292077-101721-08438cf8d2ed21fe5947641f4ae99cd8-2015493826',
    });

    // Crear un objeto que cumpla con la interfaz PreferenceCreateData
    const body: any = {
      items: [
        {
          title: createPaymentDto.title,
          quantity: Number(createPaymentDto.quantity),
          unit_price: Number(createPaymentDto.price),
          currency_id: 'ARS',
        },
      ],
      back_urls: {
        success: `http://localhost:5173/user/allcredits`,
        failure: `http://localhost:5173/user/credit/`,
        pending: `http://localhost:5173/user/credit/`,
      },
      auto_return: 'approved',
      external_reference: id,
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });
    return result;
  }
}
