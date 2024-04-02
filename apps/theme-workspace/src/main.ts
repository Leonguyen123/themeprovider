/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const globalPrefix = 'api'

  app.enableVersioning({
    defaultVersion: ['1'],
    type: VersioningType.URI,
  })

  // swagger config
  const config = new DocumentBuilder()
    .setTitle('Theme Provider')
    .setDescription('The Theme Provider API description')
    .setVersion('1.0')
    .addTag('Theme Provider')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document)

  const port = process.env.PORT || 3200
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}`)
}

bootstrap()
