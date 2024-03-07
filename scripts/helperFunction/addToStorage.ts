import { checkDate, checkDetail, checkTitle } from './helperIndex.js';
import { DEADLINE_INPUT, TITLE_INPUT, DETAIL_INPUT } from '../constants.js';
import { TodoType } from '../types.js';

export function addToStorage() {
  const deadline = DEADLINE_INPUT.value;
  const title = TITLE_INPUT.value;
  const detail = DETAIL_INPUT.value;

  const date = new Date();
  const id: number = date.getTime();
  const isDate = checkDate();
  const isTitle = checkTitle();
  const isDetail = checkDetail();

  if (isDate && isTitle && isDetail) {
    const items: TodoType[] = JSON.parse(localStorage.getItem('todo') || '');

    const priorityInput = <HTMLInputElement>(
      document.querySelector('input[name="priority"]:checked')
    );
    const formatDeadline = `${deadline[8]}${deadline[9]}.${deadline[5]}${deadline[6]}.${deadline[0]}${deadline[1]}${deadline[2]}${deadline[3]}`;

    items.push({
      title: title,
      description: detail,
      deadline: formatDeadline,
      priority: priorityInput.value,
      id: id,
    });

    localStorage.todo = JSON.stringify(items);
    window.location.href = '../../pages/index.html';
  }
}
