import { MESSAGE, INDEX } from './constants.js';
import { createContainer, createEmptyContainer, sortTodo, } from './helperFunction/helperIndex.js';
if (!localStorage.completed) {
    localStorage.completed = '[]';
}
sortTodo();
if (typeof localStorage.todo === 'undefined' || localStorage.todo === '[]') {
    createEmptyContainer(MESSAGE);
}
else {
    const todoList = JSON.parse(localStorage.todo);
    for (const key in todoList) {
        createContainer(todoList[key], INDEX);
    }
}
