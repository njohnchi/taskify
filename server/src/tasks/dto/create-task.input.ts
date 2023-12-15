import { InputType, Int, Field } from '@nestjs/graphql';
import { TaskStatus } from '../types/task-status';
import { IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field()
  @Length(3, 50)
  title: string;

  @Field({ nullable: true })
  description?: string;
}
