import { formatTime } from "./components/countdown-timer/animated-clock";
import Storage from "./components/storage";
const storage = new Storage();

const seeAll = document.querySelector("[data-see-all]") as HTMLElement;

if (seeAll) {
  import("./components/see-all/see-all").then(({ SeeAll }) => {
    new SeeAll(seeAll);
  });
}

const runningTask = document.querySelector(
  "[data-running-task]",
) as HTMLElement;

if (runningTask) {
  import("./components/running-task/running-task").then(({ RunningTask }) => {
    new RunningTask(runningTask);
  });
}

const tasksButtons = document.querySelectorAll(
  "[data-tasks-button]",
) as NodeListOf<HTMLElement>;

if (tasksButtons.length > 0) {
  import("./components/tasks-button/tasks-button").then(({ TasksButton }) => {
    tasksButtons.forEach((tasksButton) => {
      new TasksButton(tasksButton);
    });
  });
}

const infoButtons = document.querySelectorAll(
  "[data-info-button]",
) as NodeListOf<HTMLElement>;

if (infoButtons.length > 1) {
  import("./components/info-button/info-button").then(({ InfoButton }) => {
    infoButtons.forEach((infoButton) => {
      new InfoButton(infoButton);
    });
  });
}

const newTaskButtons = document.querySelectorAll(
  "[data-new-task-button]",
) as NodeListOf<HTMLElement>;

if (newTaskButtons.length > 1) {
  import("./components/new-task-button/new-task-button").then(
    ({ NewTaskButton }) => {
      newTaskButtons.forEach((newTaskButton) => {
        new NewTaskButton(newTaskButton);
      });
    },
  );
}

const backButtons = document.querySelectorAll(
  ".back-button",
) as NodeListOf<HTMLElement>;

if (backButtons.length > 0) {
  import("./components/back-button/back-button").then(({ BackButton }) => {
    backButtons.forEach((backButton) => {
      new BackButton(backButton);
    });
  });
}

const data = storage.readAll();
const incompleteTasks = data.filter((element) => !element.completed);
const container = document.getElementById("incomplete-task-list");
container.innerHTML = "";
incompleteTasks.forEach((element: task) => {
  const div = document.createElement("div");
  div.innerHTML = `<div data-incomplete-task class="incomplete-task">
  <img
    class="incomplete-task__icon"
    src="https://res.cloudinary.com/space48/image/upload/v1637838942/weight_kfdzmi.png"
  />
  <div class="incomplete-task__rows">
    <div class="incomplete-task__row">
      <h3 class="incomplete-task__name">${element.name}</h3>
      <p class="incomplete-task__time">${formatTime(element.remainingTime)}</p>
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
  container.appendChild(div);
});
