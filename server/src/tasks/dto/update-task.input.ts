import { CreateTaskInput } from './create-task.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { TaskStatus } from '../types/task-status';
import { IsEnum, Length } from 'class-validator';

@InputType()
export class UpdateTaskInput extends PartialType(CreateTaskInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  @Length(3, 50)
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
