import { getEditId, editStorage } from './helperFunction/helperIndex.js';

const canceButton = document.querySelector('.cancel');
const updateButton = document.querySelector('.update');

canceButton?.addEventListener('click', () => {
  window.location.href = '../index.html';
});

getEditId();
updateButton?.addEventListener('click', editStorage);
