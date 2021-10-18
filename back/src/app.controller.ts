import { Body, Param, Post } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BuyDto } from './mint.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('projects')
  getHello() {
    return this.appService.getAllProjects();
  }
  @Post('buy')
  buyAndMint(@Body() dto: BuyDto) {
    return this.appService.buyAndMint(dto);
  }
}
