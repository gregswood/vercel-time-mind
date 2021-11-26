import { renderIncompleteTasks } from "../incomplete-tasks/incomplete-tasks";

export class BackButton {
  element: HTMLElement;
  clickListener: EventListener;

  constructor(element: HTMLElement) {
    this.element = element;

    this.bind();
  }

  bind() {
    this.clickListener = this.handleClick.bind(this);
    this.element.addEventListener("click", this.clickListener);
  }

  handleClick() {
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

    renderIncompleteTasks();
  }
  destroy() {
    this.element.removeEventListener("click", this.clickListener);
  }
}
