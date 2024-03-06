import { checkDate, checkDetail, checkTitle } from './helperIndex.js';

import {
  DEADLINE_INPUT,
  TITLE_INPUT,
  DETAIL_INPUT,
  ArraysT,
} from '../constants.js';

export function editStorage() {
  const deadline = DEADLINE_INPUT.value;
  const title = TITLE_INPUT.value;
  const detail = DETAIL_INPUT.value;

  let oldObjects: ArraysT = [];
  if (checkTitle() && checkDetail() && checkDate()) {
    oldObjects = JSON.parse(localStorage.getItem('todo') || '');

    const editId: number = JSON.parse(localStorage.getItem('editId') || '');
    const formatDeadline = `${deadline[8]}${deadline[9]}.${deadline[5]}${deadline[6]}.${deadline[0]}${deadline[1]}${deadline[2]}${deadline[3]}`;
    const priorityInput = <HTMLInputElement>(
      document.querySelector('input[name="priority"]:checked')
    );

    oldObjects.push({
      title: title,
      description: detail,
      deadline: formatDeadline,
      priority: priorityInput.value,
      id: oldObjects[editId].id,
    });
    oldObjects.splice(editId, 1);

    localStorage.todo = JSON.stringify(oldObjects);
    window.location.href = '../../pages/index.html';
  }
}
