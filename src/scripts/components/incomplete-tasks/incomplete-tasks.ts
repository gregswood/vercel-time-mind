import { Task } from "../../task";
import { formatTime } from "../countdown-timer/animated-clock";

const iconMap = {
  Weights:
    "https://res.cloudinary.com/space48/image/upload/v1637838942/weight_kfdzmi.png",
  Computer:
    "https://res.cloudinary.com/space48/image/upload/v1637843038/laptop_wdgxmp.png",
  Book: "https://res.cloudinary.com/space48/image/upload/v1637842874/book_ycntva.png",
  weights:
    "https://res.cloudinary.com/space48/image/upload/v1637838942/weight_kfdzmi.png",
  computer:
    "https://res.cloudinary.com/space48/image/upload/v1637843038/laptop_wdgxmp.png",
  book: "https://res.cloudinary.com/space48/image/upload/v1637842874/book_ycntva.png",
};

export const renderIncompleteTasks = (target: HTMLElement, tasks: Task[]) => {
  tasks.forEach((element: Task) => {
    const div = document.createElement("div");
    div.innerHTML = `<div data-incomplete-task class="incomplete-task">
    <img
      class="incomplete-task__icon"
      src="${iconMap[element.iconType]}"
    />
    <div class="incomplete-task__rows">
      <div class="incomplete-task__row">
        <h3 class="incomplete-task__name">${element.taskName}</h3>
        <p class="incomplete-task__time">${formatTime(
          element.remainingTime,
        )}</p>
      </div>
      <div class="incomplete-task__row">
        <div class="category category--${element.priority}">
          <p class="category__text">${element.category}</p>
        </div>
        <img
          data-task="${element.taskName}" 
          class="incomplete-task__play playbutton"
          src="https://res.cloudinary.com/space48/image/upload/v1637839411/play_xgbctx.png"
        />
      </div>
    </div>
  </div>`;
    target.appendChild(div);
  });

  const playButtons = document.querySelectorAll(
    ".playbutton",
  ) as NodeListOf<HTMLImageElement>;
  if (playButtons.length > 0) {
    import("../play-button/play-button").then(({ PlayButton }) => {
      playButtons.forEach((playButton) => {
        new PlayButton(playButton);
      });
    });
  }
};
