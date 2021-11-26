export class Navigator {
  element: HTMLElement;
  destination: string;
  clickListener: EventListener;

  constructor(element: HTMLElement, destination: string) {
    this.element = element;
    this.destination = destination;

    this.bind();
  }

  bind() {
    this.clickListener = this.handleClick.bind(this);
    this.element.addEventListener("click", this.clickListener);
  }

  handleClick(event: Event) {
    const pageElements = document.querySelectorAll(
      `.${this.destination}`,
    ) as NodeListOf<HTMLElement>;
    pageElements.forEach((element) => (element.hidden = false));

    const otherElements = document.querySelectorAll(
      `div:not(.${this.destination})`,
    ) as NodeListOf<HTMLElement>;
    otherElements.forEach((element) => (element.hidden = true));

    console.log(event);
  }

  destroy() {
    this.element.removeEventListener("click", this.clickListener);
  }
}
