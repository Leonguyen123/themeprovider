import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from '@modules/authz/jwt.strategy'

import { TestController } from '@controllers/authz/test.controller'

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [AppController, TestController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
