import { formatTime } from "../countdown-timer/animated-clock";
import { Task } from "../../task";

export const renderIncompleteTasks = (target, tasks) => {
  tasks.forEach((element: Task) => {
    const div = document.createElement("div");
    div.innerHTML = `<div data-incomplete-task class="incomplete-task">
    <img
      class="incomplete-task__icon"
      src="https://res.cloudinary.com/space48/image/upload/v1637838942/weight_kfdzmi.png"
    />
    <div class="incomplete-task__rows">
      <div class="incomplete-task__row">
        <h3 class="incomplete-task__name">${element.taskName}</h3>
        <p class="incomplete-task__time">${formatTime(
          element.remainingTime,
        )}</p>
      </div>
      <div class="incomplete-task__row">
        <div class="category">
          <p class="category__text">${element.category}</p>
        </div>
        <img
          class="incomplete-task__play"
          src="https://res.cloudinary.com/space48/image/upload/v1637839411/play_xgbctx.png"
        />
      </div>
    </div>
  </div>`;
    target.appendChild(div);
  });
};
