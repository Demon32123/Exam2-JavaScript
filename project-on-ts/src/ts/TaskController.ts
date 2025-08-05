import type { ApplicationStore } from "./ApplicationStore";
import { TaskModel } from "./TaskModel";
import { TaskView } from "./TaskView";

export class TaskController {
  // constructor(
  //   container: HTMLElement,
  //   button: HTMLElement,
  //   storage: ApplicationStore
  // ) {
  //   const inputTask = document.getElementById(
  //     "textInput"
  //   ) as HTMLInputElement | null;
  //   if (storage.tasks.length != 0) {
  //     const checkButton = document.getElementById("task__check-mark-container");
  //     checkButton?.addEventListener('click', () => {
  //       checkButton.style.setProperty('background-color', 'black');
  //     });
  //   }
  //   if (inputTask != null) {
  //     inputTask.addEventListener("keydown", (e) => {
  //       if (e.key === "Enter") {
  //         e.preventDefault();
  //         this.onClickEvent(storage, container, inputTask);
  //       }
  //     });

  //     button.addEventListener("click", () => {
  //       this.onClickEvent(storage, container, inputTask);
  //     });
  //   }
  // }
  todoContainer!: HTMLElement; // Заготовка для контейнера (не используется)

  // Сеттер для задач - специальный метод, вызываемый при присваивании
  set task(value: TaskModel[]) {
    // При обновлении задач:
    this.appState.tasks = value; // 1. Обновляем состояние
    this.view.renderToDo(value); // 2. Перерисовываем представление
  }

  // Конструктор принимает состояние и представление
  constructor(private appState: ApplicationStore, private view: TaskView) {}

  // onClickEvent(
  //   storage: ApplicationStore,
  //   container: HTMLElement,
  //   inputTask: HTMLInputElement
  // ) {
  //   if (inputTask != null) {
  //     const textInput = inputTask.value;
  //     if (textInput != "") {
  //       const taskModelId = this.addTask(textInput, container);
  //       storage.tasks.push(taskModelId);
  //       inputTask.value = "";
  //     } else {
  //       alert("Write a task!");
  //     }
  //   }
  // }

  // addTask(content: string, container: HTMLElement): string {
  //   const newTaskModel = new TaskModel(content);
  //   const newTaskView = new TaskView(content);

  //   newTaskView.element.dataset.taskId = newTaskModel.taskId;

  //   container.appendChild(newTaskView.element);
  //   return newTaskModel.taskId;
  // }

  toggleTaskStatus() {}
}
