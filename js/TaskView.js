export class TaskView {
  constructor(content) {
    this.element = this.createTask(content);
  }

  createTask(content) {
    const taskContainer = document.createElement("div");
    const taskText = document.createElement("p");
    const checkMarkContainer = document.createElement("button");

    taskText.textContent = content;
    taskText.className = "task__text";
    taskContainer.className = "task";
    checkMarkContainer.className = "task__check-mark-container";

    taskContainer.style.cssText =
      "display: flex; background-color: #F3EFEE; margin-top: 1rem; border-radius: 10px;1";

    checkMarkContainer.style.cssText =
      "border-radius: 5px; border: 2px solid white; padding: 12px; margin: 1rem; max-height: fit-content;";

    taskText.style.cssText = "margin-left: 1rem; word-break: break-all;";

    taskContainer.appendChild(checkMarkContainer);
    taskContainer.appendChild(taskText);
    return taskContainer;
  }
}
