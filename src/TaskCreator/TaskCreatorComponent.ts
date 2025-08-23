import { AppStore } from "../Store/ApplicationStore";
import { TaskModel } from "../Tasks/TaskModel";

import styles from "./TaskCreatorStyles.css?raw";

export class TaskCreatorComponent extends HTMLElement {
  _ShadowRoot: ShadowRoot;
  _Styles: CSSStyleSheet;

  constructor() {
    super();
    this._ShadowRoot = this.attachShadow({ mode: "closed" });
    this._Styles = new CSSStyleSheet();
    this._Styles.replaceSync(styles);
    this._ShadowRoot.adoptedStyleSheets = [this._Styles];
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    this.render();
  }

  adoptedCallback() {}

  render() {
    this._ShadowRoot.innerHTML = ` 

        <div class="add-task">
          <div class="add-task__task-input-wrap">
            <textarea type="text" id="textInput" class="add-task__task-textarea" placeholder="Write a task..."
              required></textarea>
          </div>
    
          <button id="addButton" class="add-task__add-button" onclick="this.getRootNode().host.onAddButtonClick()">Add</button> 

        </div>
        `;
  }

  onAddButtonClick() {
    const element = this._ShadowRoot.getElementById(
      "textInput"
    ) as HTMLInputElement;

    if (element) {
      const model = new TaskModel(element.value);
      AppStore.tasks.value = [...(AppStore.tasks.value || []), model];
    } else {
      throw "no such element";
    }

    this.render();
  }
}
