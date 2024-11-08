import { TITLE_INPUT, TITLE_ERROR, DETAIL_INPUT, DETAIL_ERROR, DEADLINE_INPUT, DEADLINE_ERROR, } from '../constants.js';
export function checkDate() {
    const deadlineValue = DEADLINE_INPUT.value;
    const currDate = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 50);
    if (!deadlineValue ||
        new Date(deadlineValue) < currDate ||
        new Date(deadlineValue) > maxDate) {
        DEADLINE_ERROR === null || DEADLINE_ERROR === void 0 ? void 0 : DEADLINE_ERROR.classList.remove('hidden');
        return false;
    }
    DEADLINE_ERROR === null || DEADLINE_ERROR === void 0 ? void 0 : DEADLINE_ERROR.classList.add('hidden');
    return true;
}
export function checkTitle() {
    if (!TITLE_INPUT.value) {
        TITLE_ERROR === null || TITLE_ERROR === void 0 ? void 0 : TITLE_ERROR.classList.remove('hidden');
        return false;
    }
    else {
        TITLE_ERROR === null || TITLE_ERROR === void 0 ? void 0 : TITLE_ERROR.classList.add('hidden');
        return true;
    }
}
export function checkDetail() {
    if (!DETAIL_INPUT.value) {
        DETAIL_ERROR === null || DETAIL_ERROR === void 0 ? void 0 : DETAIL_ERROR.classList.remove('hidden');
        return false;
    }
    else {
        DETAIL_ERROR === null || DETAIL_ERROR === void 0 ? void 0 : DETAIL_ERROR.classList.add('hidden');
        return true;
    }
}
