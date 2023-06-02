import { Injectable } from '@nestjs/common';

import { UserRepository } from './user.repository';

import { AccountOutput } from './DTO/app.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAll(): Promise<AccountOutput[]> {
    const data = await this.userRepository.list();
    return data;
  }

  async getOne(id: string): Promise<AccountOutput> {
    const data = await this.userRepository.findOne((i) => i.id === id);
    return data;
  }
}
