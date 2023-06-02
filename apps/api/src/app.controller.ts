import { Controller, Get, Param, Query } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';

import { UserService } from '@libs/user';
import { AccountOutputVO } from './VO/app.vo';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  async getAll(@Query('role') role: string): Promise<AccountOutputVO[]> {
    const options = { groups: [role] };
    const realData = await this.userService.getAll();
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
    const realData = await this.userService.getOne(id);
    const newData = new AccountOutputVO(realData);

    const results = instanceToPlain(newData, options);

    console.log('serialized object: %o', newData, results);
    return results as AccountOutputVO;
  }
}
