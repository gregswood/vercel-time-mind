import Storage from "../storage";
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
  }

  destroy() {
    this.element.removeEventListener("submit", this.clickListener);
  }
}
