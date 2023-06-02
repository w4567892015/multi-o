import { Resolver, Query, Args } from '@nestjs/graphql';
import { instanceToPlain } from 'class-transformer';

import { GetUsersArgs, GetOneUserArgs, User } from './models';
import { UserService } from '@libs/user';

@Resolver()
export class AppResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async all(@Args() args: GetUsersArgs): Promise<User[]> {
    const { role } = args;
    const options = { groups: [role] };
    const realData = await this.userService.getAll();
    const newData = realData.map((account) => new User(account));

    const results = instanceToPlain(newData, options);
    console.log('serialized object: %o', newData, results);

    return results as User[];
  }

  @Query(() => User)
  async one(@Args() args: GetOneUserArgs): Promise<User> {
    const { id, role } = args;
    const options = { groups: [role] };
    const realData = await this.userService.getOne(id);
    const newData = new User(realData);

    const results = instanceToPlain(newData, options);
    console.log('serialized object: %o', newData, results);

    return results as User;
  }
}
