import { checkDate, checkDetail, checkTitle } from "./checkInputs.js";

export function addToStorage() {
  let newId = 0;
  const isDate = checkDate();
  const isTitle = checkTitle();
  const isDetail = checkDetail();
  if (isDate && isTitle && isDetail) {
    const items = JSON.parse(localStorage.getItem("todo"));
    if (!!items && items.length !== 0) {
      const idArr = items.map((element) => element.id);
      newId = Math.max(...idArr) + 1;
    }

    let formatDeadline = `${deadline.value[8]}${deadline.value[9]}.${deadline.value[5]}${deadline.value[6]}.${deadline.value[0]}${deadline.value[1]}${deadline.value[2]}${deadline.value[3]}`;
    items.push({
      title: title.value,
      description: detail.value,
      deadline: formatDeadline,
      priority: document.querySelector('input[name="priority"]:checked').value,
      id: newId,
    });

    localStorage.todo = JSON.stringify(items);
    window.location.href = "../index.html";
  }
}
