import { Injectable } from '@nestjs/common';

import { AccountAttributes } from './PO/app.po';

import path from 'path';
import csv from 'csvtojson';

const dataDir = path.join(__dirname, 'data');

@Injectable()
export class AppRepository {
  private accounts: AccountAttributes[];

  constructor() {
    this.loadData();
  }
  private async loadData(): Promise<void> {
    this.accounts = await csv().fromFile(path.join(dataDir, 'test.csv'));
  }
  async list(): Promise<AccountAttributes[]> {
    return this.accounts;
  }
  async findOne(func): Promise<AccountAttributes> {
    return this.accounts.find(func);
  }
}
