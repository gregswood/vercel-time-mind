import Storage from "./components/storage";
const storage = new Storage();
import { renderIncompleteTasks } from "./components/incomplete-tasks/incomplete-tasks";
import { renderRunningTask } from "./components/running-task/running-task";
import {
  createTimer,
  stopTimer,
} from "./components/countdown-timer/animated-clock";

const seeAll = document.querySelector("[data-see-all]") as HTMLElement;

export let myTimer: NodeJS.Timer;

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

renderIncompleteTasks();
renderRunningTask();
if (storage.readAll().filter((element) => element.running).length) {
  stopTimer(myTimer);
  myTimer = createTimer();
}

const newTaskForm = document.querySelector(
  "[data-new-task-form]",
) as HTMLFormElement;

if (newTaskForm) {
  import("./components/new-task-form/new-task-form").then(({ NewTaskForm }) => {
    new NewTaskForm(newTaskForm);
  });
}

const playButtons = document.querySelectorAll(
  ".playbutton",
) as NodeListOf<HTMLImageElement>;

if (playButtons.length > 0) {
  import("./components/play-button/play-button").then(({ PlayButton }) => {
    playButtons.forEach((playButton) => {
      const player = new PlayButton(playButton);
      myTimer = player.handleClick();
    });
  });
}
