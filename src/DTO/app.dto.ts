import { IsNumberString } from 'class-validator';

export class AccountInput {
  @IsNumberString()
  id: string;
}
