import {
  TITLE_INPUT,
  DETAIL_INPUT,
  DEADLINE_INPUT,
  ObjT,
  ArraysT,
} from '../constants.js';

export function getEditId() {
  const id = Number(window.location.search.slice(1));
  const data: ArraysT = JSON.parse(localStorage.getItem('todo') || '');

  data.forEach((element: ObjT, index: number) => {
    if (element.id == id) {
      localStorage.setItem('editId', String(index));
    }
  });
  const editId: number = JSON.parse(localStorage.getItem('editId') || '');

  const editElement = data[editId];
  TITLE_INPUT.value = editElement.title;
  DETAIL_INPUT.value = editElement.description;

  const deadlineString = editElement.deadline;
  const reverseDeadline = `${deadlineString[6]}${deadlineString[7]}${deadlineString[8]}${deadlineString[9]}-${deadlineString[3]}${deadlineString[4]}-${deadlineString[0]}${deadlineString[1]}`;
  DEADLINE_INPUT.value = reverseDeadline;
}
