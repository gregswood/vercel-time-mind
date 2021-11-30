import { createTimer, stopTimer } from "../countdown-timer/animated-clock";
import Storage from "../storage";
const storage = new Storage();

export class PlayTimerButton {
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
    console.log(this.element.classList[this.element.classList.length - 1]);
    const myTask = storage.readOne(
      this.element.classList[this.element.classList.length - 1].replace(
        "-",
        " ",
      ),
    );
    storage.updateTimer(myTask.taskName, "running", 1);
    const myNewTimer = createTimer();
    storage.updateTimer(myTask.taskName, "running", myNewTimer);
    this.element.innerHTML = `<button  class="round-button round-button__timer-control">
    <img
      src="https://res.cloudinary.com/space48/image/upload/v1637927613/pause_hen8g3.png"
    />
  </button>
  <p class="timer-control__label">Pause</p>`;
    this.element.id = "pause";
    this.destroy();
    const pauseButton = document.getElementById("pause") as HTMLFormElement;
    if (pauseButton) {
      import("./pause").then(({ PauseButton }) => {
        new PauseButton(pauseButton);
      });
    }
  }
  destroy() {
    this.element.removeEventListener("click", this.clickListener);
  }
}
