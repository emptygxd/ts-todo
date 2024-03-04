import { addToStorage } from './helperFunction/addToStorage.js';

const addButton = document.getElementById('add');

addButton?.addEventListener('click', addToStorage);
