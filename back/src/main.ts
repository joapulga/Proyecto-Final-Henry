import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { auth } from 'express-openid-connect';
import { config as auth0Config } from './config/auth0.config';  

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: "https://finacierahenry.netlify.app/",
    // 'http://localhost:5173' // URL del frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Si estás usando cookies o autenticación basada en sesión
  });
  app.use(auth({...auth0Config}));

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     exceptionFactory: (errors) => {
  //       const cleanErrors = errors.map((err) => {
  //         return { property: err.property, constraints: err.constraints };
  //       });
  //       return new BadRequestException({
  //         alert: 'Se han detectado los siguientes errores en la petición: ',
  //         errors: cleanErrors,
  //       });
  //     },
  //   }),
  // );
  const swaggerConfig = new DocumentBuilder()
    .setTitle('App financical')
    .setDescription(
      'This is an App designed to give money for everybody who need  cash Advance',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);


  await app.listen(3000);
}
bootstrap();
