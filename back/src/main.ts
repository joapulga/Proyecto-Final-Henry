import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      exceptionFactory: (errors) => {
        const cleanErrors = errors.map((err) => {
          return { property: err.property, constraints: err.constraints };
        });
        return new BadRequestException({
          alert: 'Se han detectado los siguientes errores en la petición: ',
          errors: cleanErrors,
        });
      },
    }),
  );
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
