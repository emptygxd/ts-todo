import {
  createContainer,
  createEmptyContainer,
} from "./helperFunction/loadBlocks.js";

if (typeof localStorage.completed === "undefined") {
  const message = "Вы пока не завершили ни одного дела.";
  createEmptyContainer(message);
} else {
  const completedList = JSON.parse(localStorage.completed);

  for (const key in completedList) {
    createContainer(completedList[key], key, "completed");
  }
}
