import { renderInfo } from "../info-block/info-block";

export class PeriodToggle {
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
    const periodButtons = document.getElementsByClassName(
      "period-toggle__option",
    );

    Array.from(periodButtons).forEach((button) => {
      button.classList.remove("period-toggle__option--selected");
    });

    const target = event.target as HTMLElement;

    target.classList.add("period-toggle__option--selected");

    renderInfo(Number(target.dataset.period));
  }
  destroy() {
    this.element.removeEventListener("click", this.clickListener);
  }
}
