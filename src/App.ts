import { ApplicationStore } from "./ApplicationStore.ts";
import { TaskView } from "./Tasks/TaskView.ts";
import { TaskController } from "./Tasks/TaskController.ts";
import { MasterCheckboxView } from "./MasterCheckbox/MasterCheckboxView.ts";
import { MasterCheckboxController } from "./MasterCheckbox/MasterCheckboxController.ts";

export class App {
  constructor() {
    this.initialize();
  }

  initialize() {
    const htmlElements = {
      tasksContainer: document.getElementById("container") as HTMLDivElement,
      toolsContainer: document.getElementById("tools") as HTMLDivElement,
      addButton: document.getElementById("addButton") as HTMLButtonElement,
      inputTask: document.getElementById("textInput") as HTMLInputElement,
      masterCheckbox: document.getElementById("all") as HTMLInputElement,
    };
    const storage = new ApplicationStore();
    const taskView = new TaskView(htmlElements);
    const masterCheckboxView = new MasterCheckboxView(htmlElements, storage);
    const masterCheckboxController = new MasterCheckboxController(
      htmlElements,
      storage,
      taskView,
      masterCheckboxView
    );
    const taskController = new TaskController(
      htmlElements,
      taskView,
      storage
    );
  }
}
