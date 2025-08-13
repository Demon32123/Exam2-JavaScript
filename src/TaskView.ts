import type { TaskModel } from "./TaskModel";


export class TaskView {
  constructor(private viewContainer: any) {}

  taskTemplate(task: TaskModel) {
    return `
        <div id="${task.id}" class="task">
        <input     
        type='checkbox'
        id='checkbox__${task.id}'    
                ${task.checked ? "checked" : ""}
                class="task__check-mark-container ${
                  task.checked ? "checked" : ""
                }"
            ></input>
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
