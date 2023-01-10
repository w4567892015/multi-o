import { Exclude, Expose } from 'class-transformer';

import { AccountAttributes } from '../PO/app.po';

export class AccountOutput implements AccountAttributes {
  id: string;
  firstName: string;
  lastName: string;

  @Exclude()
  password: string;

  @Expose()
  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
