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
    const incompleteTasks = document.querySelectorAll(
      "[data-incomplete-task]",
    ) as NodeListOf<HTMLElement>;
    incompleteTasks.forEach((task) => {
      task.classList.toggle("incomplete-task--hidden");
    });
  }

  destroy() {
    this.element.removeEventListener("click", this.clickListener);
  }
}
