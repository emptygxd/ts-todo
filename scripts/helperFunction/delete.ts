import { INDEX_PAGE, MESSAGE, Obj, Arrays } from '../constants.js';
import { createEmptyContainer } from './loadBlocks.js';

export function deleteBlock(event: MouseEvent) {
  const id = (event.target as HTMLElement).id;

  const container = document.getElementById(id);
  if (container === null) {
    return;
  }

  if (
    confirm(
      'Вы уверены, что хотите удалить "' +
        container?.querySelector('h2')?.innerText +
        '"?'
    )
  ) {
    INDEX_PAGE?.removeChild(container);
    const oldTodo: Arrays = JSON.parse(localStorage.getItem('todo') || '');

    oldTodo.forEach((element: Obj, index: number) => {
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
