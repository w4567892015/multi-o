import { Injectable } from '@nestjs/common';

import { UserRepository } from '../../repositorys/user/user.repository';

import { AccountInput, AccountOutput } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<AccountOutput[]> {
    const data = await this.userRepository.list();
    return data;
  }

  async findOne(input: AccountInput): Promise<AccountOutput> {
    const data = await this.userRepository.findOne(input.id);
    return data;
  }
}
