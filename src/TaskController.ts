import type { ApplicationStore } from "./ApplicationStore.ts";
import { TaskModel } from "./TaskModel.ts";
import { TaskView } from "./TaskView.ts";

export class TaskController {
  set task(value: TaskModel[]) {
    this.appState.tasks = value;
    this.view.renderTasks(value);
  }

  constructor(
    private appState: ApplicationStore,
    private view: TaskView,
    private taskContainer: HTMLElement,
    button: HTMLButtonElement,
    inputTask: HTMLInputElement,
    tasks: TaskModel[]
  ) {
    this.onClickHandler(button, inputTask, tasks);
  }

  onCheckStateUpdate(todoId: string) {
    const index = this.appState.tasks.findIndex((todo) => todoId == todo.id);
    const head = this.appState.tasks.slice(0, index);
    const tail = this.appState.tasks.slice(index + 1);

    this.task = [
      ...head,
      {
        ...this.appState.tasks[index],
        checked: !this.appState.tasks[index].checked,
      },
      ...tail,
    ];
  }

  onClickHandler(
    button: HTMLButtonElement,
    inputTask: HTMLInputElement,
    tasks: TaskModel[]
  ) {
    button.addEventListener("click", () => {
      if (inputTask.value != "") {
        this.addNewTask(tasks, inputTask);
      } else {
        alert("Write a task!");
      }
    });

    inputTask.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (inputTask.value != "") {
          this.addNewTask(tasks, inputTask);
        } else {
          alert("Write a task!");
        }
      }
    });

    this.taskContainer.addEventListener("click", (event: PointerEvent) => {
      const target = event.target as HTMLInputElement;
      if (target.tagName == "INPUT") {
        const parentElement = target.parentElement?.dataset.id as string;
        this.onCheckStateUpdate(parentElement);
      }
    });
  }

  addNewTask(tasks: TaskModel[], inputTask: HTMLInputElement) {
    const textInput = inputTask.value;
    const model = new TaskModel(textInput);
    tasks.push(model);
    this.task = tasks;
    inputTask.value = "";
  }
}
