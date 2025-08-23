import type { ApplicationStore } from "../ApplicationStore";
import type { HtmlElements } from "../Interfaces";
import type { MasterCheckboxView } from "./MasterCheckboxView";
import type { TaskModel } from "../Tasks/TaskModel";
import type { TaskView } from "../Tasks/TaskView";

export class MasterCheckboxController {
  constructor(
    private htmlElments: HtmlElements,
    private storage: ApplicationStore,
    private taskView: TaskView,
    private masterCheckboxView: MasterCheckboxView,
    public allChecked: boolean = false
  ) {
    this.initializeHandlers();
  }

  get tasks() {
    return this.storage.tasks;
  }

  set tasks(value: TaskModel[]) {
    this.storage.tasks = value;
    this.taskView.renderTasks(value);
  }

  initializeHandlers() {
    this.htmlElments.masterCheckbox?.addEventListener("change", () => {
      this.storage.masterCheckboxStatus = !this.storage.masterCheckboxStatus;
      this.tasks = this.tasks.map((task) => ({
        ...task,
        checked: this.storage.masterCheckboxStatus,
      }));
      this.allChecked = this.tasks.every((task) => task.checked);
      this.masterCheckboxView.renderMasterCheckbox();
    });
  }
}
