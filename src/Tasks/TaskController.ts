import type { ApplicationStore } from "../ApplicationStore.ts";
import type { HtmlElements } from "../Interfaces.ts";
import { TaskModel } from "./TaskModel.ts";
import { TaskView } from "./TaskView.ts";

export class TaskController {
  get tasks() {
    return this.appState.tasks;
  }

  set tasks(value: TaskModel[]) {
    this.appState.tasks = value;
    this.view.renderTasks(value);
  }

  constructor(
    private htmlElements: HtmlElements,
    private view: TaskView,
    private appState: ApplicationStore,
  ) {
    this.initializeHandlers();
  }

  onCheckStateUpdate(todoId: string) {
    const index = this.tasks.findIndex((todo) => todoId == todo.id);
    const head = this.tasks.slice(0, index);
    const tail = this.tasks.slice(index + 1);

    this.tasks = [
      ...head,
      {
        ...this.tasks[index],
        checked: !this.tasks[index].checked,
      },
      ...tail,
    ];
  }

  initializeHandlers() {
    if (!this.htmlElements.addButton) {
      throw new Error("add Button are not existed in DOM, please check it");
    } else {
      this.htmlElements.addButton.addEventListener("click", () => {
        if (
          (this.htmlElements.inputTask as HTMLInputElement).value != "" &&
          this.htmlElements.inputTask != null
        ) {
          this.addNewTask(
            (this.htmlElements.inputTask as HTMLInputElement).value
          );
        } else {
          alert("Write a task!");
        }
      });
    }

    if (!this.htmlElements.inputTask) {
      throw new Error("task Input are not existed in DOM, please check it");
    } else {
      this.htmlElements.inputTask.addEventListener(
        "keydown",
        (event: KeyboardEvent) => {
          if (event.key === "Enter") {
            event.preventDefault();
            if (
              this.htmlElements.inputTask &&
              this.htmlElements.inputTask.value != ""
            ) {
              this.addNewTask(this.htmlElements.inputTask.value);
            } else {
              alert("Write a task!");
            }
          }
        }
      );
    }

    if (!this.htmlElements.tasksContainer) {
      throw new Error(
        "task Div element are not existed in DOM, please check it"
      );
    } else {
      this.htmlElements.tasksContainer.addEventListener(
        "click",
        (event: PointerEvent) => {
          const target = event.target as HTMLInputElement;
          if (target.tagName == "INPUT") {
            const parentElement = target.parentElement?.id as string;
            this.onCheckStateUpdate(parentElement);
          }
        }
      );
    }
  }

  addNewTask(value: string) {
    const model = new TaskModel(value);
    this.tasks = [...this.tasks, model];
    if (this.htmlElements.inputTask) this.htmlElements.inputTask.value = "";
  }
}
