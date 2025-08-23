import type { TaskModel } from "./TaskModel";

export class TasksComponent extends HTMLElement {
  tasks: TaskModel[] = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["data-tasks"];
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (name === "data-tasks") {
      this.tasks = JSON.parse(newValue);
    }

    this.render();
  }

  render() {
    this.innerHTML = this.renderTasks(this.tasks);
  }

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

  renderTasks(tasks: TaskModel[] | null) {
    if (!tasks) return "";

    return tasks.reduce((acc, task) => {
      acc += this.taskTemplate(task);
      return acc;
    }, "");
  }
}
