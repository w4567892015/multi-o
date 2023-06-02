import { Injectable } from '@nestjs/common';

import { AccountAttributes } from './PO/app.po';

@Injectable()
export class UserRepository {
  private accounts: AccountAttributes[];

  constructor() {
    this.loadData();
  }
  private async loadData(): Promise<void> {
    this.accounts = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        password: '123456',
      },
      {
        id: '2',
        firstName: 'ken',
        lastName: 'Doe',
        password: '1234567',
      },
    ];
  }
  async list(): Promise<AccountAttributes[]> {
    return this.accounts;
  }
  async findOne(func): Promise<AccountAttributes> {
    return this.accounts.find(func);
  }
}
