import { ObjT, ArraysT } from '../constants';

function orderByDate(a: ObjT, b: ObjT) {
  const str1: string = `${a.deadline[6]}${a.deadline[7]}${a.deadline[8]}${a.deadline[9]}.${a.deadline[3]}${a.deadline[4]}.${a.deadline[0]}${a.deadline[1]}`;
  const str2: string = `${b.deadline[6]}${b.deadline[7]}${b.deadline[8]}${b.deadline[9]}.${b.deadline[3]}${b.deadline[4]}.${b.deadline[0]}${b.deadline[1]}`;

  const dateA: Date = new Date(str1);
  const dateB: Date = new Date(str2);

  if (dateA > dateB) {
    return 1;
  }
  if (dateA < dateB) {
    return -1;
  } else {
    return 0;
  }
}

export function sortTodo(): void {
  const oldTodo: ArraysT = JSON.parse(localStorage.getItem('todo') || '');
  const high: ArraysT = [];
  const mid: ArraysT = [];
  const low: ArraysT = [];

  oldTodo.forEach(element => {
    if (element.priority === 'high') {
      high.push(element);
    }
    if (element.priority === 'mid') {
      mid.push(element);
    }
    if (element.priority === 'low') {
      low.push(element);
    }
  });

  high.sort(orderByDate);
  mid.sort(orderByDate);
  low.sort(orderByDate);

  const sortedTodo = high.concat(mid.concat(low));
  localStorage.todo = JSON.stringify(sortedTodo);
}
