import { getEditId, editStorage } from './helperFunction/helperIndex.js';
const canceButton = document.querySelector('.cancel');
const updateButton = document.querySelector('.update');
canceButton === null || canceButton === void 0 ? void 0 : canceButton.addEventListener('click', () => {
    window.location.href = './index.html';
});
getEditId();
updateButton === null || updateButton === void 0 ? void 0 : updateButton.addEventListener('click', editStorage);
