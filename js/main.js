import { TaskController } from "./TaskController.js";
import { ApplicationStore } from "./ApplicationStore.js";

const storage = new ApplicationStore();
const task = new TaskController("container");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", () => {
  const inputTask = document.getElementById("textInput");
  const textInput = inputTask.value;

  if (container) {
    const taskModelId = task.addTask(textInput);
    storage.tasks.push(taskModelId);
  }
});
