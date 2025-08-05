import { ApplicationStore } from "./ApplicationStore";
import { TaskModel } from "./TaskModel";
import { TaskView } from "./TaskView";
import { TaskController } from "./TaskController";

// 5. Главный класс приложения
export class App {
  constructor() {
    this.initialize(); // Вызов инициализации при создании
  }

  initialize() {
    const storage = new ApplicationStore();
    const container = document.getElementById("container") as HTMLElement;
    const view = new TaskView(container);

    const controller = new TaskController(storage, view);
    const tasks: TaskModel[] = [];
    const button = document.getElementById("addButton");
    const inputTask = document.getElementById(
      "textInput"
    ) as HTMLInputElement | null;
    if (button != null && inputTask != null) {
      button.addEventListener("click", () => {
                
                const textInput = inputTask.value;
                const model = new TaskModel(textInput);
                tasks.push(model);
                controller.task = tasks;


      });
    }

    //     if (inputTask != null) {
    //       inputTask.addEventListener("keydown", (e) => {
    //         if (e.key === "Enter") {
    //           e.preventDefault();
    //           this.onClickEvent(storage, container, inputTask, controller);
    //         }
    //       });

    //       button.addEventListener("click", () => {
    //         this.onClickEvent(storage, container, inputTask, controller);
    //       });
    //     }
    //   }
  }
  //   onClickEvent(
  //     storage: ApplicationStore,
  //     container: HTMLElement,
  //     inputTask: HTMLInputElement,
  //     controller: TaskController
  //   ) {
  //     if (inputTask != null) {
  //       const textInput = inputTask.value;
  //       if (textInput != "") {
  //         const taskModelId = this.addTask(textInput, container, controller);
  //         storage.tasks.push(taskModelId);
  //         inputTask.value = "";
  //       } else {
  //         alert("Write a task!");
  //       }
  //     }
  //   }

  //     addTask(content: string, container: HTMLElement, controller: TaskController, tasks): string {
  //     const newTaskModel = new TaskModel(content);
  //     const newTaskView = new TaskView(content);

  //     // newTaskView.element.dataset.taskId = newTaskModel.id;

  //     controller.task(tasks)
  //     return newTaskModel.id;
  //   }
}
