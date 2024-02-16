import { checkDate, checkDetail, checkTitle } from "./checkInputs.js";

export function editStorage() {
  let oldObjects = [];
  if (checkTitle() && checkDetail() && checkDate()) {
    oldObjects = JSON.parse(localStorage.getItem("todo"));
    const editId = JSON.parse(localStorage.getItem("editId"));

    let formatDeadline = `${deadline.value[8]}${deadline.value[9]}.${deadline.value[5]}${deadline.value[6]}.${deadline.value[0]}${deadline.value[1]}${deadline.value[2]}${deadline.value[3]}`;
    oldObjects.push({
      title: title.value,
      description: detail.value,
      deadline: formatDeadline,
      priority: document.querySelector('input[name="priority"]:checked').value,
      id: oldObjects[editId].id,
    });
    oldObjects.splice(editId, 1);

    localStorage.todo = JSON.stringify(oldObjects);
    window.location.href = "../index.html";
  }
}
