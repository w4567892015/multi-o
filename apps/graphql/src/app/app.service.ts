import { Injectable } from '@nestjs/common';

import { AppRepository } from './app.repository';

import { AccountOutput } from './DTO/app.dto';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  async getAll(): Promise<AccountOutput[]> {
    const data = await this.appRepository.list();
    return data;
  }

  async getOne(id: string): Promise<AccountOutput> {
    const data = await this.appRepository.findOne((i) => i.id === id);
    return data;
  }
}
