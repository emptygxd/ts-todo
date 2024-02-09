import createLoadManager from "./helperFunction/loadBlocks.js";
import createSortManager from "./helperFunction/sort.js";

const loadManager = createLoadManager();
const sortManager = createSortManager();

window.createContainer = loadManager.createContainer;
window.createEmptyContainer = loadManager.createEmptyContainer;
window.sortTodo = sortManager.sortTodo;

sortTodo();
if (typeof localStorage.todo === "undefined" || localStorage.todo === "[]") {
  const message = "У вас пока нет дел.";
  createEmptyContainer(message);
} else {
  const todoList = JSON.parse(localStorage.todo);
  for (const key in todoList) {
    createContainer(todoList[key], "index");
  }
}
