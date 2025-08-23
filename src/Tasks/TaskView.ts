import type { TaskModel } from "./TaskModel";

export class TaskView {
  constructor() {}

  static taskTemplate(task: TaskModel) {
    return `
        <div id="${task.id}" class="task">
        <input     
        type='checkbox'
        id='checkbox-${task.id}'    
                ${task.checked ? "checked" : ""}
                class="task__check-mark-container ${
                  task.checked ? "checked" : ""
                }"
            ></input>
            <p  class="task__text">${task.text}</p>
        </div>
    `;
  }

  static renderTasks(tasks: TaskModel[] | null) {
    if (!tasks) return "";

    return tasks.reduce((acc, task) => {
      acc += this.taskTemplate(task);
      return acc;
    }, "");
  }
}
