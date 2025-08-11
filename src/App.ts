import { ApplicationStore } from "./ApplicationStore.ts";
import { TaskModel } from "./TaskModel.ts";
import { TaskView } from "./TaskView.ts";
import { TaskController } from "./TaskController.ts";

export class App {
  constructor() {
    this.initialize();
  }

  initialize() {
    const storage = new ApplicationStore();
    const container = document.getElementById("container") as HTMLElement;
    const view = new TaskView(container);
    const button = document.getElementById(
      "addButton"
    ) as HTMLButtonElement | null;
    const inputTask = document.getElementById(
      "textInput"
    ) as HTMLInputElement | null;
    const tasks: TaskModel[] = [];
    if (button != null && inputTask != null) {
      const controller = new TaskController(
        storage,
        view,
        container,
        button,
        inputTask,
        tasks
      );
    }
  }
}
