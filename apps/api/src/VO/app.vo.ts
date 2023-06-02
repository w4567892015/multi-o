import { Exclude, Expose } from 'class-transformer';

import { AccountOutput } from '@libs/user';

export class User implements AccountOutput {
  id: string;
  firstName: string;
  lastName: string;

  @Expose({ groups: ['admin'] })
  password: string;

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(partial: Partial<AccountOutput>) {
    Object.assign(this, partial);
  }
}
