import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { UseGuards } from '@nestjs/common';
import { CurrentUser, JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from '../users/entities/user.entity';

@Resolver(() => Task)
@UseGuards(JwtAuthGuard)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Mutation(() => Task)
  createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
    @CurrentUser() user: User,
  ) {
    return this.tasksService.create(createTaskInput, user);
  }

  @Query(() => [Task], { name: 'tasks' })
  findAll() {
    return this.tasksService.findAll();
  }

  @Query(() => Task, { name: 'task' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tasksService.findOne(id);
  }

  @Mutation(() => Task)
  updateTask(
    @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    return this.tasksService.update(updateTaskInput.id, updateTaskInput);
  }

  @Mutation(() => Task)
  removeTask(@Args('id', { type: () => Int }) id: number): Promise<Task> {
    return this.tasksService.remove(id);
  }

  @ResolveField(() => User)
  user(@Parent() task: Task): User {
    return task.user;
  }
}
