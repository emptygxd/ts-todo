export function completeBlock(event) {
  const id = event.target.id;
  const container = document.getElementById(id);
  const title = container.querySelector("h2");
  const description = container.querySelector("h3");
  const deadline = container.querySelector("p");
  const pics = container.querySelector(".todo__imgs");

  const titleText = title.innerText;
  const descriptionText = description.innerText;
  const deadlineText = deadline.innerText;

  const priority = container.classList.item(1);
  let oldCompleted = [];
  let oldTodo = [];
  if (!container.classList.contains("done")) {
    container.classList.toggle("done");

    oldTodo = JSON.parse(localStorage.getItem("todo"));
    if (JSON.parse(localStorage.getItem("completed")) !== null) {
      oldCompleted = JSON.parse(localStorage.getItem("completed"));
    }

    title.classList.remove("outcross");
    description.classList.remove("outcross");
    deadline.classList.remove("outcross");
    pics.classList.remove("outcross");

    title.classList.add("cross");
    description.classList.add("cross");
    deadline.classList.add("cross");
    pics.classList.add("cross");

    oldCompleted.push({
      title: titleText,
      description: descriptionText,
      deadline: deadlineText,
      priority: priority,
      id: id,
    });

    oldTodo.forEach((element, index) => {
      if (
        element.id == id &&
        element.title == titleText &&
        element.description == descriptionText &&
        element.deadline == deadlineText &&
        element.priority == priority
      ) {
        oldTodo.splice(index, 1);
      }
    });

    localStorage.todo = JSON.stringify(oldTodo);
    localStorage.completed = JSON.stringify(oldCompleted);
  } else {
    container.classList.toggle("done");

    oldCompleted = JSON.parse(localStorage.getItem("completed"));
    if (JSON.parse(localStorage.getItem("todo")) !== null) {
      oldTodo = JSON.parse(localStorage.getItem("todo"));
    }

    title.classList.remove("cross");
    description.classList.remove("cross");
    deadline.classList.remove("cross");
    pics.classList.remove("cross");

    title.classList.add("outcross");
    description.classList.add("outcross");
    deadline.classList.add("outcross");
    pics.classList.add("outcross");

    oldTodo.push({
      title: titleText,
      description: descriptionText,
      deadline: deadlineText,
      priority: priority,
      id: id,
    });

    oldCompleted.forEach((element, index) => {
      if (
        element.id == id &&
        element.title == titleText &&
        element.description == descriptionText &&
        element.deadline == deadlineText &&
        element.priority == priority
      ) {
        oldCompleted.splice(index, 1);
      }
    });

    localStorage.todo = JSON.stringify(oldTodo);
    localStorage.completed = JSON.stringify(oldCompleted);
  }
}
