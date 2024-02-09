import { title, detail, deadline } from "../constants.js";

import createEditStorageManager from "./editStorage.js";

const editStorageManager = createEditStorageManager();

window.editStorage = editStorageManager.editStorage;

export default function createGetIdManager() {
  function getEditId() {
    const id = window.location.search.slice(1);
    const data = JSON.parse(localStorage.getItem("todo"));

    data.forEach((element, index) => {
      if (element.id == id) {
        localStorage.setItem("editId", index);
      }
    });

    const editElement = data[localStorage.getItem("editId")];
    title.value = editElement.title;
    detail.value = editElement.description;

    const deadlineString = editElement.deadline;
    const reverseDeadline = `${deadlineString[6]}${deadlineString[7]}${deadlineString[8]}${deadlineString[9]}-${deadlineString[3]}${deadlineString[4]}-${deadlineString[0]}${deadlineString[1]}`;
    deadline.value = reverseDeadline;
  }

  return {
    getEditId,
  };
}
