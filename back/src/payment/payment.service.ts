import { Injectable } from '@nestjs/common';
import MercadoPagoConfig, { Preference} from 'mercadopago';
import { MercadoPagoConfigProvider } from '../config/mercado-pago';
import { CreatePaymentDto } from './dto/createPreference_dto';
import { CreatePreferenceDto } from './dto/createPreferenceDto';

@Injectable()
export class PaymentService {
  constructor(private readonly mercadoPagoConfig: MercadoPagoConfigProvider) {}

  async createPreference(createPaymentDto:CreatePaymentDto) {
    
    const client = new MercadoPagoConfig({ accessToken: "APP_USR-164994297377580-100214-3a9671296feea9596c0c761a3fe69e83-2015493111" });
    const preference = new Preference(client);

    // Crear un objeto que cumpla con la interfaz PreferenceCreateData
    const preferenceData: any = {
      body: {
        items: [
          {
            title: createPaymentDto.title,
            quantity: createPaymentDto.quantity,
            unit_price: createPaymentDto.price,
            currency_id: 'ARS',
          },
        ],
        back_urls: {
          success: 'https://tu-url-de-exito.com',
          failure: 'https://tu-url-de-fallo.com',
          pending: 'https://tu-url-de-pendiente.com',
        },
        auto_return: 'approved',
      },
    };

    const result = await preference.create(preferenceData);
    return result;
  }
}