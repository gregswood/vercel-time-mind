export class SeeAll {
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
    const incompleteTasks = document.querySelector(
      "[data-incomplete-tasks]",
    ) as HTMLElement;

    incompleteTasks.classList.toggle("incomplete-tasks--hidden");
  }

  destroy() {
    this.element.removeEventListener("click", this.clickListener);
  }
}
