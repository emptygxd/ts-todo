function orderByDate(a, b) {
  let str1 = `${a.deadline[6]}${a.deadline[7]}${a.deadline[8]}${a.deadline[9]}.${a.deadline[3]}${a.deadline[4]}.${a.deadline[0]}${a.deadline[1]}`;
  let str2 = `${b.deadline[6]}${b.deadline[7]}${b.deadline[8]}${b.deadline[9]}.${b.deadline[3]}${b.deadline[4]}.${b.deadline[0]}${b.deadline[1]}`;

  let dateA = new Date(str1);
  let dateB = new Date(str2);

  if (dateA > dateB) {
    return 1;
  }
  if (dateA < dateB) {
    return -1;
  } else {
    return 0;
  }
}

export function sortTodo() {
  let oldTodo = [];
  const high = [];
  const mid = [];
  const low = [];
  if (JSON.parse(localStorage.getItem('todo')) !== null) {
    oldTodo = JSON.parse(localStorage.getItem('todo'));
  }

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

  let sortedTodo = high.concat(mid.concat(low));
  localStorage.todo = JSON.stringify(sortedTodo);
}
