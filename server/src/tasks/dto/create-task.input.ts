import { InputType, Int, Field } from '@nestjs/graphql';
import { TaskStatus } from '../types/task-status';

@InputType()
export class CreateTaskInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}
