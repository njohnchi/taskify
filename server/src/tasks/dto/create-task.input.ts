import { InputType, Field } from '@nestjs/graphql';
import { TaskStatus } from '../types/task-status';
import { IsEnum, Length } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field()
  @Length(3, 50)
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ defaultValue: TaskStatus.PENDING, nullable: true })
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
