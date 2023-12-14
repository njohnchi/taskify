import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string;

  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  name: string;
}
