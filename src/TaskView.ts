import type { TaskModel } from "./TaskModel";
import type { HtmlElements } from "./Interfaces";

export class TaskView {
  constructor(private HtmlElemnets: HtmlElements) {}

  taskTemplate(task: TaskModel) {
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

  renderTasks(task: TaskModel[]) {
    if (this.HtmlElemnets.tasksContainer != null) {
      this.HtmlElemnets.tasksContainer.innerHTML = task.reduce((acc, task) => {
        acc += this.taskTemplate(task);
        return acc;
      }, "");
    }
  }
}
