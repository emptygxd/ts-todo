import createCheckInputManager from "./checkInputs.js";

const checkInputManager = createCheckInputManager();

window.checkDate = checkInputManager.checkDate;
window.checkDetail = checkInputManager.checkDetail;
window.checkTitle = checkInputManager.checkTitle;

export default function createAddToStorageManager() {
  function addToStorage() {
    let oldObjects = [];
    let newId = 0;

    if (checkDate() && checkTitle() && checkDetail()) {
      if (JSON.parse(localStorage.getItem("todo")).length !== 0) {
        oldObjects = JSON.parse(localStorage.getItem("todo"));
        newId = oldObjects[oldObjects.length - 1].id + 1;
      }

      let formatDeadline = `${deadline.value[8]}${deadline.value[9]}.${deadline.value[5]}${deadline.value[6]}.${deadline.value[0]}${deadline.value[1]}${deadline.value[2]}${deadline.value[3]}`;
      oldObjects.push({
        title: title.value,
        description: detail.value,
        deadline: formatDeadline,
        priority: document.querySelector('input[name="priority"]:checked')
          .value,
        id: newId,
      });

      localStorage.todo = JSON.stringify(oldObjects);
      window.location.href = "../index.html";
    }
  }

  return {
    addToStorage,
  };
}
