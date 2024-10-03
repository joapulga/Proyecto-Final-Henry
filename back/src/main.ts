import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { auth } from 'express-openid-connect';
import { config as auth0Config } from './config/auth0.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir peticiones desde http://localhost:5173
  app.enableCors({
    origin: 'http://localhost:5173', // URL del frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Si estás usando cookies o autenticación basada en sesión
  });

  app.use(auth({...auth0Config}));
  await app.listen(3000);
}

bootstrap();
