import { AppView } from "./AppView.ts";
import { RenderEvent } from "./RenderEvent.ts";
import { TaskCreatorComponent } from "../TaskCreator/TaskCreatorComponent.ts";
import { TasksComponent } from "../Tasks/TasksComponent.ts";

export class App {
  _AppView: AppView;
  _RenderEvent: RenderEvent = new RenderEvent();

  constructor() {
    this.defineCustomElements();

    if (this.appContainer) {
      this._AppView = new AppView(this.appContainer);
      this._RenderEvent.subscribe(() => {
        this._AppView.render();
      });

      this._RenderEvent.next("hello");
    } else {
      throw "no app container present in template";
    }
  }

  get appContainer(): HTMLDivElement | null {
    return document.getElementById("app") as HTMLDivElement | null;
  }

  defineCustomElements() {
    customElements.define("app-task-creator", TaskCreatorComponent);
    customElements.define("app-tasks", TasksComponent);
  }
}
