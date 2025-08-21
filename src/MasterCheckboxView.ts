import type { HtmlElements } from "./Interfaces";

export class MasterCheckboxView {
  constructor(private htmlElements: HtmlElements) {}

  renderMasterCheckbox(allChecked: boolean) {
    if (!this.htmlElements.masterCheckbox) {
      throw new Error(
        "master checkbox are not existed in DOM, please check it"
      );
    } else {
      this.htmlElements.masterCheckbox.checked = allChecked;
    }
  }
}
