import { RenderEvent } from "../App/RenderEvent";
import type { StoreObject } from "../Interfaces/Interfaces";

export function registerValue<T>(initialValue?: T): StoreObject<T> {
  const renderEvent = new RenderEvent();

  return {
    _value: initialValue,

    set value(value: T) {
      this._value = value;

      renderEvent.next('hello');
    },

    get value(): T | null {
      return this._value || null;
    },
  };
}
