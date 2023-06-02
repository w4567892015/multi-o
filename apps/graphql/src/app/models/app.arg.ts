import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetUsersArgs {
  @Field()
  role: string;
}

@ArgsType()
export class GetOneUserArgs extends GetUsersArgs {
  @Field()
  @IsNotEmpty()
  id: string;
}
