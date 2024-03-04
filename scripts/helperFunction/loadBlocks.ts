import { INDEX_PAGE, INDEX, Obj } from '../constants.js';
import { deleteBlock } from './delete.js';
import { completeBlock } from './complete.js';

export function createEmptyContainer(message: string): void {
  const p = document.createElement('p');
  p.classList.add('empty-storage');
  p.innerText = message;
  INDEX_PAGE?.appendChild(p);
}

export function createContainer(todoObject: Obj, page: string) {
  const todo__container = document.createElement('div');

  const todo__text = document.createElement('div');
  const todo__title = document.createElement('div');
  const h2 = document.createElement('h2');

  const todo__subtitle = document.createElement('div');
  const h3 = document.createElement('h3');

  h2.innerText = todoObject.title;
  h2.title = todoObject.title;
  h3.innerText = todoObject.description;
  h3.title = todoObject.description;

  todo__title.classList.add('todo__title');
  todo__subtitle.classList.add('todo__subtitle');

  todo__title.appendChild(h2);
  todo__subtitle.appendChild(h3);

  todo__text.classList.add('todo__text');
  todo__text.appendChild(todo__title);
  todo__text.appendChild(todo__subtitle);

  todo__container.classList.add('todo__container');
  todo__container.setAttribute('id', todoObject.id);
  todo__container.appendChild(todo__text);

  INDEX_PAGE?.appendChild(todo__container);

  if (page === INDEX) {
    const todo__imgs = document.createElement('div');
    const pDeadline = document.createElement('p');
    const aEdit = document.createElement('a');
    const imgEdit = document.createElement('img');

    const imgTrash = document.createElement('img');

    const imgDone = document.createElement('img');

    pDeadline.innerText = todoObject.deadline;
    pDeadline.title = todoObject.deadline;
    pDeadline.classList.add('deadline');

    aEdit.href = '../pages/edit.html?' + todoObject.id;
    imgEdit.src = '../assets/edit.png';
    imgEdit.alt = 'edit';
    imgEdit.setAttribute('id', todoObject.id);
    aEdit.appendChild(imgEdit);

    imgTrash.src = '../assets/trash.png';
    imgTrash.alt = 'trash';
    imgTrash.setAttribute('id', todoObject.id);

    imgTrash.onclick = deleteBlock;

    imgDone.src = '../assets/done.png';
    imgDone.alt = 'done';
    imgDone.setAttribute('id', todoObject.id);
    imgDone.onclick = completeBlock;

    todo__imgs.classList.add('todo__imgs');
    todo__imgs.appendChild(aEdit);
    todo__imgs.appendChild(imgTrash);
    todo__imgs.appendChild(imgDone);

    todo__title.appendChild(pDeadline);
    todo__container.classList.add(todoObject.priority);
    todo__container.appendChild(todo__imgs);
  }
}
