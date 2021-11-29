import { myTimer } from "../../app";
import { createTimer, stopTimer } from "../countdown-timer/animated-clock";
import { renderIncompleteTasks } from "../incomplete-tasks/incomplete-tasks";
import { renderRunningTask } from "../running-task/running-task";
import Storage from "../storage";
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
    if (myTimer) {
      stopTimer(myTimer);
    }
    const runningTask = storage.readAll().filter((i) => i.running);
    if (runningTask.length) {
      storage.updateTimer(runningTask[0].taskName, "running", false);
    }
    storage.updateTimer(this.element.dataset.task, "running", true);
    const myNewTimer = createTimer();
    renderRunningTask();
    renderIncompleteTasks();
    return myNewTimer;
  }
  destroy() {
    this.element.removeEventListener("click", this.clickListener);
  }
}
