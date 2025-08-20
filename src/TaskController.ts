import type { ApplicationStore } from "./ApplicationStore.ts";
import { TaskModel } from "./TaskModel.ts";
import { TaskView } from "./TaskView.ts";

export class TaskController {
  get tasks() {
    return this.appState.tasks;
  }

  get tasksCheckboxes(): NodeListOf<HTMLInputElement> {
    return document.querySelectorAll(".task__check-mark-container") as NodeListOf<HTMLInputElement>;
  }

  set tasks(value: TaskModel[]) {
    this.appState.tasks = value;
    this.view.renderTasks(value);
  }

  constructor(
    private tasksContainer: HTMLElement,
    private addButton: HTMLButtonElement,
    private inputTask: HTMLInputElement,
    private masterCheckbox: HTMLInputElement,
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
    this.addButton.addEventListener("click", () => {
      if (this.inputTask.value != "") {
        this.addNewTask(this.inputTask);
      } else {
        alert("Write a task!");
      }
    });

    this.inputTask.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (this.inputTask.value != "") {
          this.addNewTask(this.inputTask);
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

    this.masterCheckbox?.addEventListener("change", () => {
      const slaveCheckboxes = this.tasksCheckboxes;
      if (slaveCheckboxes != null) {
        slaveCheckboxes.forEach((checkbox) => {
          const parentElement = checkbox.parentElement?.id as string;
          this.onCheckStateUpdate(parentElement)
        });
      }
    });

  }

  addNewTask(inputTask: HTMLInputElement) {
    const { value } = inputTask;
    const model = new TaskModel(value);
    this.tasks = [...this.tasks, model];
    inputTask.value = "";
  }
}
