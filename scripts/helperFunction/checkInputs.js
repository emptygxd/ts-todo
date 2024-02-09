import {
  title,
  titleError,
  detail,
  detailError,
  deadline,
  deadlineError,
} from "../constants.js";

export default function createCheckInputManager() {
  function checkDate() {
    const currDate = new Date();

    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 50);

    if (
      !deadline.value ||
      new Date(deadline.value) < currDate ||
      new Date(deadline.value) > maxDate
    ) {
      deadlineError.classList.remove("hidden");
      return false;
    }
    deadlineError.classList.add("hidden");
    return true;
  }

  function checkTitle() {
    if (!title.value) {
      titleError.classList.remove("hidden");
      return false;
    } else {
      titleError.classList.add("hidden");
      return true;
    }
  }

  function checkDetail() {
    if (!detail.value) {
      detailError.classList.remove("hidden");
      return false;
    } else {
      detailError.classList.add("hidden");
      return true;
    }
  }

  return {
    checkDate,
    checkDetail,
    checkTitle,
  };
}
