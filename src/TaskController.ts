import type { ApplicationStore } from "./ApplicationStore.ts";
import { TaskModel } from "./TaskModel.ts";
import { TaskView } from "./TaskView.ts";
import type { HtmlElements } from "./Interfaces";

export class TaskController {

  get StorageTasks() {
    return this.appState.tasks;
  }

  set task(value: TaskModel[]) {
    this.appState.tasks = value;
    this.view.renderTasks(value);
  }

  constructor(
    private HtmlElements: HtmlElements,
    private view: TaskView,
    private appState: ApplicationStore,
    private tasks: TaskModel[]
  ) {
    if (
      this.HtmlElements.button != null &&
      this.HtmlElements.inputTask != null
    ) {
      this.initializeHandlers(
        this.HtmlElements.button,
        this.HtmlElements.inputTask
      );
    }
  }

  onCheckStateUpdate(todoId: string) {
    const index = this.StorageTasks.findIndex((todo) => todoId == todo.id);
    const head = this.StorageTasks.slice(0, index);
    const tail = this.StorageTasks.slice(index + 1);

    this.task = [
      ...head,
      {
        ...this.StorageTasks[index],
        checked: !this.StorageTasks[index].checked,
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
    if (this.HtmlElements.container != null) {
      this.HtmlElements.container.addEventListener(
        "click",
        (event: PointerEvent) => {
          const target = event.target as HTMLInputElement;
          if (target.tagName == "INPUT") {
            const parentElement = target.parentElement?.dataset.id as string;
            this.onCheckStateUpdate(parentElement);
          }
        }
      );
    }
  }

  addNewTask(inputTask: HTMLInputElement) {
    const textInput = inputTask.value;
    const model = new TaskModel(textInput);
    this.tasks.push(model);
    this.task = this.tasks;
    inputTask.value = "";
  }
}
