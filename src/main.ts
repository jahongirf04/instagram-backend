import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


async function bootstrap() {
  
  const config = new DocumentBuilder()
  .setTitle("Instagram Backend")
  .setDescription("REST API")
  .setVersion("1.0.0")
  .addTag("NestJS, Postgres, Sequielize")
  .build();
  
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);
  await app.listen(process.env.PORT);
}
bootstrap();
