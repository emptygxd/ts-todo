import createLoadManager from "./helperFunction/loadBlocks.js";

const loadManager = createLoadManager();

window.createContainer = loadManager.createContainer;
window.createEmptyContainer = loadManager.createEmptyContainer;

if (typeof localStorage.completed === "undefined") {
  const message = "У вас пока нет дел.";
  createEmptyContainer(message);
} else {
  const completedList = JSON.parse(localStorage.completed);

  for (const key in completedList) {
    createContainer(completedList[key], key, "completed");
  }
}
