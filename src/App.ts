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
    const controller = new TaskController(storage, view);
    const tasks: TaskModel[] = [];
    const button = document.getElementById("addButton");
    const inputTask = document.getElementById(
      "textInput"
    ) as HTMLInputElement | null;

    if (button != null && inputTask != null) {
      button.addEventListener("click", () => {
        const textInput = inputTask.value;
        const model = new TaskModel(textInput);
        tasks.push(model);
        controller.task = tasks;
      });
    }
  }
}
