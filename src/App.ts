import { ApplicationStore } from "./ApplicationStore.ts";
import { TaskView } from "./TaskView.ts";
import { TaskController } from "./TaskController.ts";
import type { HtmlElements } from "./Interfaces";

export class App {
  constructor() {
    this.initialize();
  }

  initialize() {
    const htmlElements: HtmlElements = {
      tasksContainer: document.getElementById("container"),
      addButton: document.getElementById("addButton") as HTMLButtonElement,
      inputTask: document.getElementById("textInput") as HTMLInputElement,
      masterCheckbox: document.getElementById("all") as HTMLInputElement
    };
    const storage = new ApplicationStore();
    const view = new TaskView(htmlElements);
    if (
      htmlElements.addButton != null &&
      htmlElements.tasksContainer != null &&
      htmlElements.inputTask != null &&
      htmlElements.masterCheckbox != null
    ) {
      const controller = new TaskController(
        htmlElements.tasksContainer,
        htmlElements.addButton,
        htmlElements.inputTask,
         htmlElements.masterCheckbox,
        view,
        storage
      );
    }
  }
}
