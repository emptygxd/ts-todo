import { add } from "./constants.js";

import createAddToStorageManager from "./helperFunction/addToStorage.js";

const addToStorageManager = createAddToStorageManager();

window.addToStorage = addToStorageManager.addToStorage;

add.addEventListener("click", addToStorage);
