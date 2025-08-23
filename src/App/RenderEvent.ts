export class RenderEvent {
  private static instance: RenderEvent;

  constructor() {
    if (RenderEvent.instance) {
      return RenderEvent.instance;
    }

    RenderEvent.instance = this;
  }

  listeners: Map<number, (arg: unknown) => void> = new Map();

  next(arg?: unknown) {
    this.listeners.forEach((callback) => callback(arg));
  }

  subscribe(callback: (arg: any) => void) {
    this.listeners.set(this.listeners.size, callback);

    function unsubribe(this: RenderEvent) {
      this.listeners.delete(this.listeners.size);
    }

    return unsubribe;
  }
}
