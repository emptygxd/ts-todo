import { getEditId } from "./helperFunction/getEditId.js";
import { editStorage } from "./helperFunction/editStorage.js";

const canceButton = document.querySelector(".cancel");
const updateButton = document.querySelector(".update");

canceButton.addEventListener("click", () => {
  window.location.href = "./index.html";
});

getEditId();
updateButton.addEventListener("click", editStorage);
