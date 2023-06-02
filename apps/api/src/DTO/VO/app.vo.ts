import { Exclude, Expose } from 'class-transformer';

import { AccountOutput } from '../DTO/app.dto';

export class AccountOutputVO implements AccountOutput {
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
