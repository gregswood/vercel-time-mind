import { createTimer, stopTimer } from "../countdown-timer/animated-clock";
import { renderRunningTask } from "../running-task/running-task";
import Storage from "../storage";
import { renderTaskDays } from "../task-day/task-day";
const storage = new Storage();

export class PlayButton {
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
    const runningTask = storage.readAll().filter((i) => i.running);
    if (runningTask.length) {
      stopTimer();
      storage.updateTimer(runningTask[0].taskName, "running", undefined);
    }
    storage.updateTimer(this.element.dataset.task, "running", 1);
    const myNewTimer = createTimer();
    storage.updateTimer(this.element.dataset.task, "running", myNewTimer);
    renderRunningTask();
    renderTaskDays();
  }
  destroy() {
    this.element.removeEventListener("click", this.clickListener);
  }
}
