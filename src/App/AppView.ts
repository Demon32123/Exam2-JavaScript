import { ApplicationStore } from "../Store/ApplicationStore";

export class AppView {
  private _ApplicationStore: ApplicationStore = new ApplicationStore();

  constructor(private appContainer: HTMLDivElement) {}

  template() {
    return `
    <div class="add-task mt1">

     <app-task-creator></app-task-creator>

    </div>
    <div class="tools">
      <input type='checkbox' class='all' id="all"></input>
      <p>All</p>
    </div>
    <app-tasks  tasks=${this._ApplicationStore.tasks.value}></app-tasks>`;
  }

  render() {
    this.appContainer.innerHTML = this.template();
  }
}
