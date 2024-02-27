import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SessionResponse {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  name: string;
}
