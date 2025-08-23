import { _ApplicationStore } from "../Store/ApplicationStore.ts";
import { TaskModel } from "./TaskModel.ts";

export class TasksController {
  constructor() {}

  // onCheckStateUpdate(todoId: string) {
  //   const index = this.tasks.findIndex((todo) => todoId == todo.id);
  //   const head = this.tasks.slice(0, index);
  //   const tail = this.tasks.slice(index + 1);

  //   this.tasks = [
  //     ...head,
  //     {
  //       ...this.tasks[index],
  //       checked: !this.tasks[index].checked,
  //     },
  //     ...tail,
  //   ];
  // }

  // initializeHandlers() {
  //   if (!this.htmlElements.addButton) {
  //     throw new Error("add Button are not existed in DOM, please check it");
  //   } else {
  //     this.htmlElements.addButton.addEventListener("click", () => {
  //       if (
  //         (this.htmlElements.inputTask as HTMLInputElement).value != "" &&
  //         this.htmlElements.inputTask != null
  //       ) {
  //         this.addNewTask(
  //           (this.htmlElements.inputTask as HTMLInputElement).value
  //         );
  //       } else {
  //         alert("Write a task!");
  //       }
  //     });
  //   }

  //   if (!this.htmlElements.inputTask) {
  //     throw new Error("task Input are not existed in DOM, please check it");
  //   } else {
  //     this.htmlElements.inputTask.addEventListener(
  //       "keydown",
  //       (event: KeyboardEvent) => {
  //         if (event.key === "Enter") {
  //           event.preventDefault();
  //           if (
  //             this.htmlElements.inputTask &&
  //             this.htmlElements.inputTask.value != ""
  //           ) {
  //             this.addNewTask(this.htmlElements.inputTask.value);
  //           } else {
  //             alert("Write a task!");
  //           }
  //         }
  //       }
  //     );
  //   }

  //   if (!this.htmlElements.tasksContainer) {
  //     throw new Error(
  //       "task Div element are not existed in DOM, please check it"
  //     );
  //   } else {
  //     this.htmlElements.tasksContainer.addEventListener(
  //       "click",
  //       (event: PointerEvent) => {
  //         const target = event.target as HTMLInputElement;
  //         if (target.tagName == "INPUT") {
  //           const parentElement = target.parentElement?.id as string;
  //           this.onCheckStateUpdate(parentElement);
  //         }
  //       }
  //     );
  //   }
  // }

  static onAddButtonClick() {
    return () => {
      const element = document.getElementById("container") as HTMLInputElement;
      if (element) {
        const model = new TaskModel(element.value);
        _ApplicationStore.tasks.value = [
          ...(_ApplicationStore.tasks.value || []),
          model,
        ];
      } else {
        throw "no such element";
      }
    };
  }
}
