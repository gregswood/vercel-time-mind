import { renderTaskDays } from "./components/task-day/task-day";
import { renderRunningTask } from "./components/running-task/running-task";
import { renderInfo } from "./components/info-block/info-block";
import { setMaxDate } from "./components/new-task-form/new-task-form";

const runningTaskImport = import("./components/running-task/running-task");
const tasksButtonImport = import("./components/tasks-button/tasks-button");
const infoButtonImport = import("./components/info-button/info-button");
const newTaskButtonImport = import(
  "./components/new-task-button/new-task-button"
);
const backButtonImport = import("./components/back-button/back-button");
const newTaskFormImport = import("./components/new-task-form/new-task-form");
const playButtonImport = import("./components/play-button/play-button");
const pauseImport = import("./components/timer-controls/pause");
const deleteButtonImport = import("./components/delete-button/delete-button");
const completeButtonImport = import(
  "./components/complete-button/complete-button"
);
const periodToggleImport = import("./components/period-toggle/period-toggle");

renderTaskDays();
renderInfo();
setMaxDate();
renderRunningTask();

const runningTask = document.querySelector(
  "[data-running-task]",
) as HTMLElement;

if (runningTask) {
  runningTaskImport.then(({ RunningTask }) => {
    new RunningTask(runningTask);
  });
}

const tasksButtons = document.querySelectorAll(
  "[data-tasks-button]",
) as NodeListOf<HTMLElement>;

if (tasksButtons.length > 0) {
  tasksButtonImport.then(({ TasksButton }) => {
    tasksButtons.forEach((tasksButton) => {
      new TasksButton(tasksButton);
    });
  });
}

const infoButtons = document.querySelectorAll(
  "[data-info-button]",
) as NodeListOf<HTMLElement>;

if (infoButtons.length > 1) {
  infoButtonImport.then(({ InfoButton }) => {
    infoButtons.forEach((infoButton) => {
      new InfoButton(infoButton);
    });
  });
}

const newTaskButtons = document.querySelectorAll(
  "[data-new-task-button]",
) as NodeListOf<HTMLElement>;

if (newTaskButtons.length > 1) {
  newTaskButtonImport.then(({ NewTaskButton }) => {
    newTaskButtons.forEach((newTaskButton) => {
      new NewTaskButton(newTaskButton);
    });
  });
}

const backButtons = document.querySelectorAll(
  ".back-button",
) as NodeListOf<HTMLElement>;

if (backButtons.length > 0) {
  backButtonImport.then(({ BackButton }) => {
    backButtons.forEach((backButton) => {
      new BackButton(backButton);
    });
  });
}

const newTaskForm = document.querySelector(
  "[data-new-task-form]",
) as HTMLFormElement;

if (newTaskForm) {
  newTaskFormImport.then(({ NewTaskForm }) => {
    new NewTaskForm(newTaskForm);
  });
}

const playButtons = document.querySelectorAll(
  ".playbutton",
) as NodeListOf<HTMLImageElement>;

if (playButtons.length > 0) {
  playButtonImport.then(({ PlayButton }) => {
    playButtons.forEach((playButton) => {
      new PlayButton(playButton);
    });
  });
}

const pauseButton = document.getElementById("pause") as HTMLFormElement;
if (pauseButton) {
  pauseImport.then(({ PauseButton }) => {
    new PauseButton(pauseButton);
  });
}
const deleteButton = document.querySelector(
  "[data-delete-task]",
) as HTMLElement;

deleteButtonImport.then(({ DeleteButton }) => {
  new DeleteButton(deleteButton);
});

const completeButton = document.querySelector(
  "[data-complete-task]",
) as HTMLElement;

completeButtonImport.then(({ CompleteButton }) => {
  new CompleteButton(completeButton);
});

const periodButtons = document.getElementsByClassName(
  "period-toggle__option",
) as HTMLCollectionOf<HTMLElement>;
periodToggleImport.then(({ PeriodToggle }) => {
  Array.from(periodButtons).forEach((button) => {
    new PeriodToggle(button);
  });
});
