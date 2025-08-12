import { ApplicationStore } from "./ApplicationStore.ts";
import { TaskModel } from "./TaskModel.ts";
import { TaskView } from "./TaskView.ts";
import { TaskController } from "./TaskController.ts";
import type { HtmlElements } from "./Interfaces";

export class App {
  constructor() {
    this.initialize();
  }

  initialize() {
    const htmlElements: HtmlElements = {
      container: document.getElementById("container"),
      button: document.getElementById("addButton") as HTMLButtonElement,
      inputTask: document.getElementById("textInput") as HTMLInputElement,
    };
    const storage = new ApplicationStore();
    const view = new TaskView(htmlElements.container);
    const tasks: TaskModel[] = [];
    const controller = new TaskController(htmlElements, view, storage, tasks);
  }
}
