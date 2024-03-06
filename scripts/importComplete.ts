import {
  createContainer,
  createEmptyContainer,
} from './helperFunction/helperIndex.js';

if (
  typeof localStorage.completed === 'undefined' ||
  localStorage.completed === '[]'
) {
  const message = 'Вы пока не завершили ни одного дела.';
  createEmptyContainer(message);
} else {
  const completedList = JSON.parse(localStorage.completed);

  for (const key in completedList) {
    createContainer(completedList[key], 'completed');
  }
}
