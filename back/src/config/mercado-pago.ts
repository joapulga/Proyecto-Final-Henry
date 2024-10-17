import { Injectable } from '@nestjs/common';
import { MercadoPagoConfig } from 'mercadopago';

@Injectable()
export class MercadoPagoConfigProvider {
    constructor() {
        return new MercadoPagoConfig({
            accessToken: 'APP_USR-164994297377580-101118-f4a63c6852bbbe76ecffe4a74745d037-2015493111', // Replace with your access token
        });
    }
}