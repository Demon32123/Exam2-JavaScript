import { TaskController } from "./TaskController.ts";
import { ApplicationStore } from "./ApplicationStore.ts";

const storage = new ApplicationStore();
const addButton = document.getElementById("addButton");
const container = document.getElementById("container");
if (container != null && addButton != null) {
  const task = new TaskController(container, addButton, storage);
}
