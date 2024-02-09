import { cancel, update } from "./constants.js";

import createGetIdManager from "./helperFunction/getEditId.js";

const getIdManager = createGetIdManager();

window.getEditId = getIdManager.getEditId;

getEditId();

cancel.addEventListener("click", () => {
  window.location.href = "./index.html";
});

update.addEventListener("click", editStorage);
