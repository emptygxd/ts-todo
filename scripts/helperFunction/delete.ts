import { INDEX_PAGE, MESSAGE } from '../constants.js';
import { TodoType } from '../types.js';
import { createEmptyContainer } from './helperIndex.js';

export function deleteBlock(event: MouseEvent) {
  const id = Number((event.target as HTMLElement).id);

  const container = document.getElementById(String(id));
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
    const oldTodo: TodoType[] = JSON.parse(localStorage.getItem('todo') || '');

    oldTodo.forEach((element: TodoType, index: number) => {
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
