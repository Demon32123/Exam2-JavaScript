import type { TaskModel } from "./TaskModel";

export class TaskView {
  constructor(private viewContainer: any) {}

  taskTemplate(task: TaskModel) {
    return `
        <div data-id="${task.id}" class="task">
        <button         
                ${task.checked ? "checked" : ""}
                class="task__check-mark-container ${
                  task.checked ? "checked" : ""
                }"
            >
            <p  class="task__text">${task.text}</p>
        </div>
    `;
  }

  renderTasks(task: TaskModel[]) {
    this.viewContainer.innerHTML = task.reduce((acc, task) => {
      acc += this.taskTemplate(task);
      return acc;
    }, "");
  }
}
