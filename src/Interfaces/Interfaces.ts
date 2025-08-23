export interface HtmlElements {
  tasksContainer: HTMLDivElement | null;
  toolsContainer: HTMLDivElement | null;
  addButton: HTMLButtonElement | null;
  inputTask: HTMLInputElement | null;
  masterCheckbox: HTMLInputElement | null;
}

export type StoreObject<T> = {
  _value: T | undefined;
  get value(): T | null;
  set value(value: T);
};
