import Storage from "../storage";
import { renderTaskDays } from "../task-day/task-day";
const storage = new Storage();

export class NewTaskForm {
  element: HTMLElement;
  clickListener: EventListener;

  constructor(element: HTMLElement) {
    this.element = element;

    this.bind();
  }

  bind() {
    this.clickListener = this.handleSubmit.bind(this);
    this.element.addEventListener("submit", this.clickListener);
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);

    let obj: any = Object.fromEntries(formData.entries());

    const { hours, minutes, seconds, ...rest } = obj;

    const totalSeconds =
      Number(seconds) + Number(minutes) * 60 + Number(hours) * 60 * 60;

    obj = {
      ...rest,
      remainingTime: totalSeconds,
      totalTime: totalSeconds,
      completed: false,
      running: undefined,
    };
    storage.addTask(obj);

    form.reset();

    renderTaskDays();

    const timerPage = document.querySelector(
      "[data-timer-page]",
    ) as HTMLElement;
    timerPage.classList.add("page--hidden");

    const newTaskPage = document.querySelector(
      "[data-new-task-page]",
    ) as HTMLElement;
    newTaskPage.classList.add("page--hidden");

    const infoPage = document.querySelector("[data-info-page]") as HTMLElement;
    infoPage.classList.add("page--hidden");

    const tasksPage = document.querySelector(
      "[data-tasks-page]",
    ) as HTMLElement;
    tasksPage.classList.remove("page--hidden");
  }

  destroy() {
    this.element.removeEventListener("submit", this.clickListener);
  }
}

export const setMaxDate = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1; //January is 0!
  const yyyy = today.getFullYear().toString();

  let dayString = dd.toString();
  if (dd < 10) {
    dayString = "0" + dd;
  }

  let monthString = mm.toString();
  if (mm < 10) {
    monthString = "0" + mm;
  }

  const dateString = yyyy + "-" + monthString + "-" + dayString;
  document.getElementById("date-field").setAttribute("min", dateString);
};
