import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('calendar')
  getCalendar(): Promise<string> {
    return this.appService.getCalendar();
  }

  @Get('menu')
  getMenu(): Promise<string> {
    return this.appService.getMenu();
  }
}
