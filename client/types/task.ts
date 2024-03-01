import type { User } from "~/types/user";

export enum TaskStatus {
  PENDING = 'PENDING',
  DOING = 'DOING',
  DONE = 'DONE',
}

export interface Task {
    id: number;
    title: string;
    description?: string;
    status: TaskStatus;
    user?: User;
}