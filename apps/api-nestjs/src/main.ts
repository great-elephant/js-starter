import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();
import '$share/global';
import { NestFactory } from '@nestjs/core';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { NODE_PORT } from '$share/const';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      exceptionFactory(errors) {
        return new BadRequestException(
          errors.map((err) => ({
            src: err.property,
            msg: err.constraints[Object.keys(err.constraints)[0]],
          })),
        );
      },
    }),
  );

  await app.listen(NODE_PORT);

  Logger.log(`ready for HTTP request (port: ${NODE_PORT})`);
}

bootstrap();
