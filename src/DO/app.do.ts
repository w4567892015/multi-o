import { Exclude, Expose } from 'class-transformer';

import { AccountAttributes } from '../PO/app.po';

export class AccountOutput implements AccountAttributes {
  id: string;

  firstName: string;

  lastName: string;

  @Expose({ groups: ['admin'] })
  password: string;

  @Expose({ name: 'fullName' })
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
