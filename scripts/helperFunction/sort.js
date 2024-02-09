export default function createSortManager() {
  function sortTodo() {
    let oldTodo = [];
    if (JSON.parse(localStorage.getItem("todo")) !== null) {
      oldTodo = JSON.parse(localStorage.getItem("todo"));
    }
    const sortedTodo = oldTodo.sort((a, b) => {
      if (b.priority < a.priority) {
        return 1;
      }
      if (b.priority > a.priority) {
        return -1;
      } else {
        return 0;
      }
    });
    localStorage.todo = JSON.stringify(sortedTodo);
  }
  return {
    sortTodo,
  };
}
