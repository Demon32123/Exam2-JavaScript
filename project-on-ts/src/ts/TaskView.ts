import type { TaskModel } from "./TaskModel";

export class TaskView {
  // element: HTMLElement;
  // buttonCheck: any;

  constructor(private viewContainer: any) {
    // this.element = this.createTask(content);
    // this.buttonCheck = this.element.querySelector("task__check-mark-container");
  }

  taskTemplate(task: TaskModel) {
    return `
        <div data-id="${task.id}">
            <p>${task.text}</p>
            <input 
                type="checkbox" 
                ${task.checked ? "checked" : ""}
                class="${task.checked ? "checked" : ""}"
            >
        </div>
    `;
  }

  renderToDo(task: TaskModel[]) {
    this.viewContainer.innerHTML = task.reduce((acc, task) => {
      acc += this.taskTemplate(task);
      return acc;
    }, "");
  }

  // createTask(content: string) {
  //   const taskContainer = document.createElement("div");
  //   const taskText = document.createElement("p");
  //   const checkMarkContainer = document.createElement("button");

  //   taskText.textContent = content;
  //   taskText.className = "task__text";
  //   taskContainer.className = "task";
  //   checkMarkContainer.className = "task__check-mark-container";

  //   taskContainer.appendChild(checkMarkContainer);
  //   taskContainer.appendChild(taskText);
  //   return taskContainer;
  // }

  // toggleCheckMarkStatus() {
  //   this.buttonCheck.classList.toggle("checked");
  // }
}
