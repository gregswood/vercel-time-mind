import Storage from "../storage";
const storage = new Storage();

export class TasksButton {
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
    const data = storage.readAll();

    const runningTasks = data.filter((task) => task.running);

    if (runningTasks.length === 0) {
      return;
    }

    const newTaskPage = document.querySelector(
      "[data-new-task-page]",
    ) as HTMLElement;
    newTaskPage.classList.add("page--hidden");

    const timerPage = document.querySelector(
      "[data-timer-page]",
    ) as HTMLElement;
    timerPage.classList.add("page--hidden");

    const infoPage = document.querySelector("[data-info-page]") as HTMLElement;
    infoPage.classList.add("page--hidden");

    const tasksPage = document.querySelector(
      "[data-tasks-page]",
    ) as HTMLElement;
    tasksPage.classList.remove("page--hidden");
  }

  destroy() {
    this.element.removeEventListener("click", this.clickListener);
  }
}
