import type { ApplicationStore } from "./ApplicationStore.ts";
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
    private tasksContainer: HTMLElement,
    private addButton: HTMLButtonElement,
    private inputTask: HTMLInputElement,
    private view: TaskView,
    private appState: ApplicationStore
  ) {
    this.initializeHandlers(this.addButton, this.inputTask);
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
    if (this.tasksContainer != null) {
      this.tasksContainer.addEventListener("click", (event: PointerEvent) => {
        const target = event.target as HTMLInputElement;
        if (target.tagName == "INPUT") {
          const parentElement = target.parentElement?.id as string;
          this.onCheckStateUpdate(parentElement);
        }
      });
    }
  }

  addNewTask(inputTask: HTMLInputElement) {
    const { value } = inputTask;
    const model = new TaskModel(value);
    this.tasks = [...this.tasks, model];
    inputTask.value = "";
  }
}
