import { Task } from "../../task";
import { formatTime } from "../countdown-timer/animated-clock";
import Storage from "../../components/storage";
const storage = new Storage();

export const renderIncompleteTasks = () => {
  const data = storage.readAll();
  const incompleteTasks = data.filter(
    (element) => !element.completed && !element.running,
  );
  const container = document.getElementById("incomplete-task-list");
  container.innerHTML = "";
  incompleteTasks.forEach((element: Task) => {
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
          data-task="${element.taskName}" 
          class="incomplete-task__play playbutton"
          src="https://res.cloudinary.com/space48/image/upload/v1637839411/play_xgbctx.png"
        />
      </div>
    </div>
  </div>`;
    container.appendChild(div);
  });

  const playButtons = document.querySelectorAll(
    ".playbutton",
  ) as NodeListOf<HTMLImageElement>;
  console.log(playButtons);
  if (playButtons.length > 0) {
    import("../play-button/play-button").then(({ PlayButton }) => {
      playButtons.forEach((playButton) => {
        new PlayButton(playButton);
      });
    });
  }
};
