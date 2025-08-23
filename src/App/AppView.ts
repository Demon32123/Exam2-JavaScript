import { ApplicationStore } from "../Store/ApplicationStore";
import { TasksController } from "../Tasks/TaskController";
import { TaskView } from "../Tasks/TaskView";

export class AppView {
  private _ApplicationStore: ApplicationStore = new ApplicationStore();

  constructor(private appContainer: HTMLDivElement) {}

  template() {
    return `<div class="add-task mt1">

      <div class="add-task__task-input-wrap">
        <textarea type="text" id="textInput" class="add-task__task-textarea" placeholder="Write a task..."
          required></textarea>
      </div>

      <button id="addButton" class="add-task__add-button" onclick="${TasksController.onAddButtonClick};">Add</button>

    </div>
    <div class="tools">
      <input type='checkbox' class='all' id="all"></input>
      <p>All</p>
    </div>
    <div id="container">
        ${TaskView.renderTasks(this._ApplicationStore.tasks.value)}
    </div>`;
  }

  render() {
    this.appContainer.innerHTML = this.template();
  }
}
