import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Task } from '../tasks/entities/task.entity';
import { TasksService } from '../tasks/tasks.service';

@Resolver(() => User)
@UseGuards(JwtAuthGuard)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private tasksService: TasksService,
  ) {}

  @Query(() => [User], { name: 'users' })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @ResolveField(() => [Task])
  tasks(@Parent() user: User): Promise<Task[]> {
    return this.tasksService.findAllByUser(user);
  }
}
