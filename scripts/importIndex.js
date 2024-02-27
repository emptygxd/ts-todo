import { MESSAGE, INDEX } from './constants.js';
import {
  createContainer,
  createEmptyContainer,
} from './helperFunction/loadBlocks.js';
import { sortTodo } from './helperFunction/sort.js';

sortTodo();
if (typeof localStorage.todo === 'undefined' || localStorage.todo === '[]') {
  createEmptyContainer(MESSAGE);
} else {
  const todoList = JSON.parse(localStorage.todo);
  for (const key in todoList) {
    createContainer(todoList[key], INDEX);
  }
}
