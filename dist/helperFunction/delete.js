import { INDEX_PAGE, MESSAGE } from '../constants.js';
import { createEmptyContainer } from './helperIndex.js';
export function deleteBlock(event) {
    var _a;
    const id = Number(event.target.id);
    const container = document.getElementById(String(id));
    if (container === null) {
        return;
    }
    if (confirm('Вы уверены, что хотите удалить "' +
        ((_a = container === null || container === void 0 ? void 0 : container.querySelector('h2')) === null || _a === void 0 ? void 0 : _a.innerText) +
        '"?')) {
        INDEX_PAGE === null || INDEX_PAGE === void 0 ? void 0 : INDEX_PAGE.removeChild(container);
        const oldTodo = JSON.parse(localStorage.getItem('todo') || '');
        oldTodo.forEach((element, index) => {
            if (element.id == id) {
                oldTodo.splice(index, 1);
            }
        });
        localStorage.todo = JSON.stringify(oldTodo);
        if (oldTodo.length === 0) {
            createEmptyContainer(MESSAGE);
        }
    }
}
