import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from '../prisma.service';
import { TasksService } from '../tasks/tasks.service';

@Module({
  providers: [UsersResolver, UsersService, PrismaService, TasksService],
  exports: [UsersService],
})
export class UsersModule {}
