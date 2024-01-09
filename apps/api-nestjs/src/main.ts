import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.resolve(ConfigService);
  const port = config.get('NODE_PORT');

  await app.listen(port);
  Logger.log(`ready for HTTP request (port: ${port})`);
}
bootstrap();
