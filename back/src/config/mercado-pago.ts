import { Injectable } from '@nestjs/common';
import { MercadoPagoConfig } from 'mercadopago';

@Injectable()
export class MercadoPagoConfigProvider {
    constructor() {
        return new MercadoPagoConfig({
            accessToken: 'APP_USR-164994297377580-100214-3a9671296feea9596c0c761a3fe69e83-2015493111', // Replace with your access token
        });
    }
}