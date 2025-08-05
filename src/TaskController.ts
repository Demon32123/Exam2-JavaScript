import type { ApplicationStore } from "./ApplicationStore.ts";
import { TaskModel } from "./TaskModel.ts";
import { TaskView } from "./TaskView.ts";

export class TaskController {
  taskConteiner!: HTMLElement;

  set task(value: TaskModel[]) {
    this.appState.tasks = value;
    this.view.renderTasks(value);
  }

  constructor(private appState: ApplicationStore, private view: TaskView) {}
}
