import { renderTaskDays } from "../task-day/task-day";
import Storage from "../storage";
import { Task } from "../../task";
import { renderRunningTask } from "../running-task/running-task";
const storage = new Storage();

export class DeleteButton {
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
    const data = storage.readAll() as Task[];

    const runningTask = data.filter((task) => task.running)[0];

    storage.deleteTime(runningTask.taskName);

    renderRunningTask();

    const timerPage = document.querySelector(
      "[data-timer-page]",
    ) as HTMLElement;
    timerPage.classList.add("page--hidden");

    const tasksPage = document.querySelector(
      "[data-tasks-page]",
    ) as HTMLElement;
    tasksPage.classList.remove("page--hidden");
  }
  destroy() {
    this.element.removeEventListener("click", this.clickListener);
  }
}
