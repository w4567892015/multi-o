import { Resolver, Query, Args } from '@nestjs/graphql';
import { instanceToPlain } from 'class-transformer';

import { User } from './models/app';
import { UserService } from '@libs/user';

import { AccountOutputVO } from './VO/app.vo';

@Resolver()
export class AppResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async all(@Args('role', { type: () => String }) role): Promise<User[]> {
    const options = { groups: [role] };
    const realData = await this.userService.getAll();
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
    const realData = await this.userService.getOne(id);
    const newData = new AccountOutputVO(realData);

    const results = instanceToPlain(newData, options);
    console.log('serialized object: %o', newData, results);

    return results as User;
  }
}
