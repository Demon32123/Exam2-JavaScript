import { TaskModel } from "./TaskModel.js";
import { TaskView } from "./TaskView.js";

export class TaskController {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  addTask(content) {
    const newTaskModel = new TaskModel(content);
    const newTaskView = new TaskView(newTaskModel.content);

    newTaskView.element.dataset.taskId = newTaskModel.taskId;

    this.container.appendChild(newTaskView.element);
    return newTaskModel.taskId;
  }
}
