import { IsNumberString } from 'class-validator';

export class AccountInput {
  @IsNumberString()
  id: string;
}

export class AccountOutput {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
}
