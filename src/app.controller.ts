import { Controller, Get, Param, Query } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';

import { AppService } from './app.service';

import { AccountInput } from './DTO/app.dto';
import { AccountOutputVO } from './VO/app.vo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/all')
  async getAll(@Query('role') role: string): Promise<AccountOutputVO[]> {
    const options = { groups: [role] };
    const realData = await this.appService.getAll();
    const newData = realData.map((account) => new AccountOutputVO(account));

    const results = instanceToPlain(newData, options);

    console.log('serialized object: %o', newData, results);
    return results as AccountOutputVO[];
  }

  @Get('/one/:id')
  async getOne(
    @Param('id') id: string,
    @Query('role') role: string,
  ): Promise<AccountOutputVO> {
    const options = { groups: [role] };
    const realData = await this.appService.getOne(id);
    const newData = new AccountOutputVO(realData);

    const results = instanceToPlain(newData, options);

    console.log('serialized object: %o', newData, results);
    return results as AccountOutputVO;
  }
}
