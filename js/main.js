import { ArrayTask } from "./ArrayTask.js";

const taskManager = new ArrayTask("container");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", () => {
  const inputTask = document.getElementById("textInput");
  const textInput = inputTask.value;

  if (container) taskManager.addTask(textInput);
});
