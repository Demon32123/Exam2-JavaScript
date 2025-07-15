import { Task } from "./Task.js";

export class ArrayTask {
  constructor(containerId) {
    this.task = [];
    this.container = document.getElementById(containerId);
  }

  addTask(content) {
    const newTask = new Task(content);
    this.task.push(newTask);
    this.container.appendChild(newTask.element);
  }
}
