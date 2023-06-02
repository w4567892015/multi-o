import { Resolver, Query, Args } from '@nestjs/graphql';

import { User } from './models/app';
import { AppService } from './app.service';

import { instanceToPlain } from 'class-transformer';
import { AccountOutputVO } from './VO/app.vo';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => [User])
  async all(@Args('role', { type: () => String }) role): Promise<User[]> {
    const options = { groups: [role] };
    const realData = await this.appService.getAll();
    const newData = realData.map((account) => new AccountOutputVO(account));

    const results = instanceToPlain(newData, options);
    console.log('serialized object: %o', newData, results);

    return results as User[];
  }

  @Query(() => User)
  async one(
    @Args('id', { type: () => String }) id,
    @Args('role', { type: () => String }) role,
  ): Promise<User> {
    const options = { groups: [role] };
    const realData = await this.appService.getOne(id);
    const newData = new AccountOutputVO(realData);

    const results = instanceToPlain(newData, options);
    console.log('serialized object: %o', newData, results);

    return results as User;
  }
}
