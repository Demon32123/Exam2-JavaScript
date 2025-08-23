import type { TaskModel } from "./TaskModel";

class TasksComponent extends HTMLElement {
  tasks: TaskModel[] = [];

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return ["tasks"];
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    this.render();
  }

  adoptedCallback() {}

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

customElements.define("app-tasks", TasksComponent);
