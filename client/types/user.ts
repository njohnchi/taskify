import type { Task } from './task';

export interface User {
    id: number;
    email: string;
    name: string;
    tasks?: Task[];
}