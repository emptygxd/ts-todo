import { TodoType } from '../types.js';

export function completeBlock(event: Event) {
  const id = Number((event.target as HTMLElement).id);

  const container = document.getElementById(String(id));
  if (container === null) {
    return;
  }

  const title = container.querySelector('h2');
  const description = container.querySelector('h3');
  const deadline = container.querySelector('p');
  const priority = container.classList.item(1);

  if (
    title === null ||
    description === null ||
    deadline === null ||
    priority === null
  ) {
    return;
  }

  const titleText = title.innerText;
  const descriptionText = description.innerText;
  const deadlineText = deadline.innerText;

  const oldCompleted: TodoType[] = JSON.parse(
    localStorage.getItem('completed') || ''
  );
  const oldTodo: TodoType[] = JSON.parse(localStorage.getItem('todo') || '');

  if (!container.classList.contains('done')) {
    container.classList.toggle('done');

    container.classList.remove('outcross');
    container.classList.add('cross');

    oldCompleted.push({
      title: titleText,
      description: descriptionText,
      deadline: deadlineText,
      priority: priority,
      id: id,
    });

    oldTodo.forEach((element, index) => {
      if (element.id === id) {
        oldTodo.splice(index, 1);
      }
    });

    localStorage.todo = JSON.stringify(oldTodo);
    localStorage.completed = JSON.stringify(oldCompleted);
  } else {
    container.classList.toggle('done');

    container.classList.remove('cross');
    container.classList.add('outcross');

    oldTodo.push({
      title: titleText,
      description: descriptionText,
      deadline: deadlineText,
      priority: priority,
      id: id,
    });

    oldCompleted.forEach((element, index) => {
      if (element.id === id) {
        oldCompleted.splice(index, 1);
      }
    });

    localStorage.todo = JSON.stringify(oldTodo);
    localStorage.completed = JSON.stringify(oldCompleted);
  }
}
