import { stopTimer } from "../countdown-timer/animated-clock";
import Storage from "../storage";
const storage = new Storage();

export class PauseButton {
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
    this.element.innerHTML = `<button  class="round-button round-button__timer-control">
    <img
      src="https://res.cloudinary.com/space48/image/upload/v1637839411/play_xgbctx.png"
    />
  </button>
  <p class="timer-control__label">Play</p>`;
    this.element.id = "play";
    this.element.classList.add(runningTask[0].taskName.replace(" ", "-"));
    this.destroy();
    console.log(this.element.classList);
    const playTimerButton = document.getElementById("play") as HTMLFormElement;
    if (playTimerButton) {
      import("./play").then(({ PlayTimerButton }) => {
        new PlayTimerButton(playTimerButton);
      });
    }
  }
  destroy() {
    this.element.removeEventListener("click", this.clickListener);
  }
}
