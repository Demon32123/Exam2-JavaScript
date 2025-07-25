import { v4 as uuidv4 } from 'uuid';

export class TaskModel {
  content: string;
  checkMarkStatus: boolean;
  taskId: string;

  constructor(content: string) {
    this.content = content;
    this.checkMarkStatus = false;
    this.taskId = uuidv4();
  }
}