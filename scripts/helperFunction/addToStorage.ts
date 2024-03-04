import { checkDate, checkDetail, checkTitle } from './checkInputs.js';
import {
  DEADLINE_INPUT,
  TITLE_INPUT,
  DETAIL_INPUT,
  Obj,
  Arrays,
} from '../constants.js';

export function addToStorage() {
  const deadline = DEADLINE_INPUT.value;
  const title = TITLE_INPUT.value;
  const detail = DETAIL_INPUT.value;

  let newId = 0;
  const isDate = checkDate();
  const isTitle = checkTitle();
  const isDetail = checkDetail();

  if (isDate && isTitle && isDetail) {
    const items: Arrays = JSON.parse(localStorage.getItem('todo') || '');
    if (!!items && items.length !== 0) {
      const idArr: string[] = items.map((element: Obj) => element.id);
      newId = Math.max(Number(...idArr)) + 1;
    }

    const priorityInput = <HTMLInputElement>(
      document.querySelector('input[name="priority"]:checked')
    );
    const formatDeadline = `${deadline[8]}${deadline[9]}.${deadline[5]}${deadline[6]}.${deadline[0]}${deadline[1]}${deadline[2]}${deadline[3]}`;

    items.push({
      title: title,
      description: detail,
      deadline: formatDeadline,
      priority: priorityInput.value,
      id: String(newId),
    });

    localStorage.todo = JSON.stringify(items);
    window.location.href = '../../pages/index.html';
  }
}
