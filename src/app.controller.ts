import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

import { AccountInput } from './DTO/app.dto';
import { AccountOutput } from './DO/app.do';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/all')
  getAll(): Promise<AccountOutput[]> {
    return this.appService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string): Promise<AccountOutput> {
    return this.appService.getOne(id);
  }
}
