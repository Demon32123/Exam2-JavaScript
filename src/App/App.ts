import { AppView } from "./AppView.ts";
import { RenderEvent } from "./RenderEvent.ts";

export class App {
  _AppView: AppView;
  _RenderEvent: RenderEvent = new RenderEvent();

  constructor() {
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
}
