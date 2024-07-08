import {

    Controller,
    Get,
    Post,
    UseGuards,
    Body
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  
  @Controller('items')
  export class TestController {
  
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(): Promise<object> {
      return {name: 'Thắng nguyễn'}
    }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body('item') item): Promise<void> {
    return {
      ...item,
      success: true
    }
  }
  }