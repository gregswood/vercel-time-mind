import { renderIncompleteTasks } from "../incomplete-tasks/incomplete-tasks";
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
      running: false,
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
