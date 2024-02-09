import { index } from "../constants.js";

export default function createCompleteManager() {
  function completeBlock(event) {
    const id = event.target.id;
    const container = document.getElementById(id);
    let oldCompleted = [];
    if (JSON.parse(localStorage.getItem("completed")) !== null) {
      oldCompleted = JSON.parse(localStorage.getItem("completed"));
    }
    oldCompleted.push({
      title: container.querySelector("h2").innerText,
      description: container.querySelector("h3").innerText,
    });

    const oldTodo = JSON.parse(localStorage.getItem("todo"));
    oldTodo.splice(id, 1);

    localStorage.todo = JSON.stringify(oldTodo);
    localStorage.completed = JSON.stringify(oldCompleted);

    index.removeChild(container);
    if (oldTodo.length === 0) {
      const message = "Вы пока не завершили ни одного дела.";
      createEmptyContainer(message);
    }
  }
  return {
    completeBlock,
  };
}
