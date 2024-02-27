import { TITLE_INPUT, DETAIL_INPUT, DEADLINE_INPUT } from '../constants.js';

export function getEditId() {
  const id = window.location.search.slice(1);
  const data = JSON.parse(localStorage.getItem('todo'));

  data.forEach((element, index) => {
    if (element.id == id) {
      localStorage.setItem('editId', index);
    }
  });

  const editElement = data[localStorage.getItem('editId')];
  TITLE_INPUT.value = editElement.title;
  DETAIL_INPUT.value = editElement.description;

  const deadlineString = editElement.deadline;
  const reverseDeadline = `${deadlineString[6]}${deadlineString[7]}${deadlineString[8]}${deadlineString[9]}-${deadlineString[3]}${deadlineString[4]}-${deadlineString[0]}${deadlineString[1]}`;
  DEADLINE_INPUT.value = reverseDeadline;
}
