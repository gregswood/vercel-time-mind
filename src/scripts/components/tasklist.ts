export class Example {
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

  handleClick(event: Event) {
    console.log(document);
  }

  destroy() {
    this.element.removeEventListener("click", this.clickListener);
  }
}
