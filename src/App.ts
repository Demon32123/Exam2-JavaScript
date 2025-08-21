import { ApplicationStore } from "./ApplicationStore.ts";
import { TaskView } from "./TaskView.ts";
import { TaskController } from "./TaskController.ts";
import { MasterCheckboxView } from "./MasterCheckboxView.ts";
import { MasterCheckboxController } from "./MasterCheckboxController.ts";

export class App {
  constructor() {
    this.initialize();
  }

  initialize() {
    const htmlElements = {
      tasksContainer: document.getElementById("container") as HTMLDivElement,
      addButton: document.getElementById("addButton") as HTMLButtonElement,
      inputTask: document.getElementById("textInput") as HTMLInputElement,
      masterCheckbox: document.getElementById("all") as HTMLInputElement,
    };
    const storage = new ApplicationStore();
    const taskView = new TaskView(htmlElements);
    const masterCheckboxView = new MasterCheckboxView(htmlElements);
    const masterCheckboxController = new MasterCheckboxController(
      htmlElements,
      storage,
      taskView,
      masterCheckboxView
    );
    const taskController = new TaskController(
      htmlElements,
      taskView,
      storage,
      masterCheckboxView
    );
  }
}
