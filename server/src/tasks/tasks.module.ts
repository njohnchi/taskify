import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [TasksResolver, TasksService, PrismaService],
})
export class TasksModule {}
