import { Field, ObjectType } from '@nestjs/graphql';
import { Exclude, Expose } from 'class-transformer';

import { AccountOutput } from '@libs/user';

@ObjectType({ description: 'user' })
export class User implements AccountOutput {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Expose({ groups: ['admin'] })
  @Field({ nullable: true })
  password: string;

  @Expose()
  @Field()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(partial: Partial<AccountOutput>) {
    Object.assign(this, partial);
  }
}
