export class RunningTask {
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
    timerPage.classList.toggle("page--hidden");

    const tasksPage = document.querySelector(
      "[data-tasks-page]",
    ) as HTMLElement;
    tasksPage.classList.toggle("page--hidden");

    stopTimer(myTimer);
    const myNewTimer = createTimer();
    return myNewTimer;
  }

  destroy() {
    this.element.removeEventListener("click", this.clickListener);
  }
}

import { Task } from "../../task";
import {
  createTimer,
  formatTime,
  stopTimer,
} from "../countdown-timer/animated-clock";
import Storage from "../../components/storage";
import { myTimer } from "../../app";
const storage = new Storage();

export const renderRunningTask = () => {
  const data = storage.readAll();
  const incompleteTasks = data.filter((element) => element.running);

  const container = document.getElementById("running-task-box");
  container.innerHTML = "";
  incompleteTasks.forEach((element: Task) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="running-task__row">
      <h2 class="running-task__time">${formatTime(element.remainingTime)}</h2>
      <img
        src="https://res.cloudinary.com/space48/image/upload/v1637842085/next_1_mpyiln.png"
        class="running-task__arrow-icon"
      />
    </div>
    <div class="task-title-box">
      <img
        src="https://res.cloudinary.com/space48/image/upload/v1637842127/time_r2npkx.png"
        class="task-title-box__timer-icon"
      />
      <p class="task-title-box__title">${element.taskName}</p>
    </div>`;
    container.appendChild(div);
  });
};
