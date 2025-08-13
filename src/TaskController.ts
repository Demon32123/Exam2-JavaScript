import type { ApplicationStore } from "./ApplicationStore.ts";
import { TaskModel } from "./TaskModel.ts";
import { TaskView } from "./TaskView.ts";
import type { HtmlElements } from "./Interfaces";

export class TaskController {

  get tasks() {
    return this.appState.tasks;
  }

  set tasks(value: TaskModel[]) {
    this.appState.tasks = value;
    this.view.renderTasks(value);
  }

  constructor(
    private HtmlElements: HtmlElements,
    private view: TaskView,
    private appState: ApplicationStore,
  ) {
    if (
      this.HtmlElements.addButton != null &&
      this.HtmlElements.inputTask != null
    ) {
      this.initializeHandlers(
        this.HtmlElements.addButton,
        this.HtmlElements.inputTask
      );
    }
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

  initializeHandlers(button: HTMLButtonElement, inputTask: HTMLInputElement) {
    button.addEventListener("click", () => {
      if (inputTask.value != "") {
        this.addNewTask(inputTask);
      } else {
        alert("Write a task!");
      }
    });

    inputTask.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (inputTask.value != "") {
          this.addNewTask(inputTask);
        } else {
          alert("Write a task!");
        }
      }
    });
    if (this.HtmlElements.tasksContainer != null) {
      this.HtmlElements.tasksContainer.addEventListener(
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

  addNewTask(inputTask: HTMLInputElement) {
    const {value} = inputTask;
    const model = new TaskModel(value);
    this.tasks = [...this.tasks, model];
    inputTask.value = "";
  }
}
