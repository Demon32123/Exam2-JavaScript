import { AppStore } from "./../Store/ApplicationStore";

export class AppView {
  constructor(private appContainer: HTMLDivElement) {}

  render() {
    this.appContainer.innerHTML = `
      <app-task-creator class="mt1"></app-task-creator>
        <div class="tools">
          <input type='checkbox' class='all' id="all"></input>
          <p>All</p>
        </div>
      <app-tasks data-tasks=${JSON.stringify(AppStore.tasks.value)}></app-tasks>
    `;
  }
}
