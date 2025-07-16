export class TaskModel {
  constructor(content) {
    this.content = content;
    this.checkMarkStatus = false;
    this.taskId = crypto.randomUUID();
  }
}
