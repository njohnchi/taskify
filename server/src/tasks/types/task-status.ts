export const TaskStatus: {
  PENDING: 'PENDING';
  DOING: 'DOING';
  DONE: 'DONE';
  CANCELLED: 'CANCELLED';
} = {
  PENDING: 'PENDING',
  DOING: 'DOING',
  DONE: 'DONE',
  CANCELLED: 'CANCELLED',
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
