import { ApplicationStore } from "../Store/ApplicationStore";
import type { HtmlElements } from "../Interfaces/Interfaces";

export class MasterCheckboxView {
  constructor(
    private htmlElements: HtmlElements,
    public store: ApplicationStore = new ApplicationStore()
  ) {}

  masterCheckboxTemplate(): string {
    return `<input     
        type='checkbox'
        id="all" 
                ${this.store.masterCheckboxStatus ? "checked" : ""}
                class="all ${this.store.masterCheckboxStatus ? "checked" : ""}"
            ></input>`;
  }
  renderMasterCheckbox() {
    if (this.htmlElements.toolsContainer != null) {
      this.htmlElements.toolsContainer.innerHTML =
        this.masterCheckboxTemplate();
    }
  }
}
