import type { ApplicationStore } from "./ApplicationStore";
import { TaskModel } from "./TaskModel";
import { TaskView } from "./TaskView";

export class TaskController {
  constructor(
    container: HTMLElement,
    button: HTMLElement,
    storage: ApplicationStore
  ) {
    const inputTask = document.getElementById(
      "textInput"
    ) as HTMLInputElement | null;
    if (inputTask != null) {
      inputTask.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.onClickEvent(storage, container, inputTask);
        }
      });

      button.addEventListener("click", () => {
        this.onClickEvent(storage, container, inputTask);
      });
    }
  }

  onClickEvent(
    storage: ApplicationStore,
    container: HTMLElement,
    inputTask: HTMLInputElement
  ) {
    if (inputTask != null) {
      const textInput = inputTask.value;
      if (textInput != "") {
        const taskModelId = this.addTask(textInput, container);
        storage.tasks.push(taskModelId);
        inputTask.value = "";
      } else {
        alert("Write a task!");
      }
    }
  }

  addTask(content: string, container: HTMLElement): string {
    const newTaskModel = new TaskModel(content);
    const newTaskView = new TaskView(content);

    newTaskView.element.dataset.taskId = newTaskModel.taskId;

    container.appendChild(newTaskView.element);
    return newTaskModel.taskId;
  }
}
