import { Injectable } from '@nestjs/common';
import { plainToInstance, instanceToPlain } from 'class-transformer';

import { AppRepository } from './app.repository';

import { AccountOutput } from './DO/app.do';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  async getAll(): Promise<AccountOutput[]> {
    const list = await this.appRepository.list();
    const realData = plainToInstance(AccountOutput, list);
    return realData.map((account) => instanceToPlain(account) as AccountOutput);
  }

  async getOne(id: string): Promise<AccountOutput> {
    const data = await this.appRepository.findOne((i) => i.id === id);
    const realData = plainToInstance(AccountOutput, data);
    return instanceToPlain(realData) as AccountOutput;
  }
}
