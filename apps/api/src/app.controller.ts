import { Controller, Get, Param, Query } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';

import { UserService } from '@libs/user';
import { User } from './VO/app.vo';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  async findAll(@Query('role') role: string): Promise<User[]> {
    const options = { groups: [role] };
    const realData = await this.userService.findAll();
    const newData = realData.map((account) => new User(account));

    const results = instanceToPlain(newData, options);
    return results as User[];
  }

  @Get('/one/:id')
  async findOne(
    @Param('id') id: string,
    @Query('role') role: string,
  ): Promise<User> {
    const options = { groups: [role] };
    const realData = await this.userService.findOne({ id });
    const newData = new User(realData);

    const results = instanceToPlain(newData, options);
    return results as User;
  }
}
