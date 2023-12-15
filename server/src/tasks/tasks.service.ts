import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from './entities/task.entity';
import { User } from '../users/entities/user.entity';
import { TaskStatus } from './types/task-status';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(createTaskInput: CreateTaskInput, user: User): Promise<Task> {
    const { title, description } = createTaskInput;

    return this.prisma.task.create({
      data: {
        title,
        description,
        status: TaskStatus.PENDING,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
      include: {
        user: true,
      },
    });
  }

  findAll() {
    return this.prisma.task.findMany({
      include: {
        user: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });
  }

  update(id: number, updateTaskInput: UpdateTaskInput): Promise<Task> {
    return this.prisma.task.update({
      where: {
        id,
      },
      data: updateTaskInput,
      include: {
        user: true,
      },
    });
  }

  remove(id: number): Promise<Task> {
    return this.prisma.task.delete({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });
  }

  findAllByUser(user: User): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        user: true,
      },
    });
  }
}
