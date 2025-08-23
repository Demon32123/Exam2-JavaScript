import type { ApplicationStore } from "../ApplicationStore";
import type { HtmlElements } from "../Interfaces";

export class MasterCheckboxView {
  constructor(
    private htmlElements: HtmlElements,
    private storage: ApplicationStore
  ) {}

  masterCheckboxTemplate(): string{
    return `<input     
        type='checkbox'
        id="all" 
                ${this.storage.masterCheckboxStatus ? "checked" : ""}
                class="all ${
                  this.storage.masterCheckboxStatus ? "checked" : ""
                }"
            ></input>`;
  }
  renderMasterCheckbox() {
    if (this.htmlElements.toolsContainer != null) {
      this.htmlElements.toolsContainer.innerHTML = this.masterCheckboxTemplate()
    }
  }
}
