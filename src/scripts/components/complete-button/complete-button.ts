import Storage from "../storage";
import { Task } from "../../task";
import { renderRunningTask } from "../running-task/running-task";
import { renderTaskDays } from "../task-day/task-day";

const storage = new Storage();

export class CompleteButton {
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

    storage.updateTimer(runningTask.taskName, "completed", true);
    storage.updateTimer(runningTask.taskName, "timeRemaining", 0);
    storage.updateTimer(runningTask.taskName, "running", false);
    storage.updateTimer(
      runningTask.taskName,
      "completedDate",
      new Date().toString(),
    );

    renderRunningTask();
    renderTaskDays();

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
