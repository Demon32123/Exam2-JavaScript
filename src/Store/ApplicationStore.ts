import type { TaskModel } from "../Tasks/TaskModel";
import { registerValue } from "./RegisterValue";

export class ApplicationStore {
  private static instance: ApplicationStore;

  constructor() {
    if (ApplicationStore.instance) {
      return ApplicationStore.instance;
    }

    ApplicationStore.instance = this;
  }

  tasks = registerValue<Array<TaskModel>>([]);

  masterCheckboxStatus: boolean = false;
}

export const _ApplicationStore = new ApplicationStore();
