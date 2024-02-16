import { INDEX_PAGE, MESSAGE } from "../constants.js";
import { createEmptyContainer } from "./loadBlocks.js";

export function deleteBlock(event) {
  const id = event.target.id;
  const container = document.getElementById(id);

  if (
    confirm(
      'Вы уверены, что хотите удалить "' +
        container.querySelector("h2").innerText +
        '"?'
    )
  ) {
    INDEX_PAGE.removeChild(container);
    const oldTodo = JSON.parse(localStorage.getItem("todo"));

    oldTodo.forEach((element, index) => {
      if (element.id == id) {
        oldTodo.splice(index, 1);
      }
    });

    localStorage.todo = JSON.stringify(oldTodo);
    if (oldTodo.length === 0) {
      createEmptyContainer(MESSAGE);
    }
  }
}
