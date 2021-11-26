const seeAll = document.querySelector("[data-see-all]") as HTMLElement;

import("./components/see-all/see-all").then(({ SeeAll }) => {
  new SeeAll(seeAll);
});

const runningTask = document.querySelector(
  "[data-running-task]",
) as HTMLElement;

import("./components/running-task/running-task").then(({ RunningTask }) => {
  new RunningTask(runningTask);
});

// const backButton = document.querySelector(".back-button") as HTMLElement;

// import("./components/back-button/back-button").then(({ BackButton }) => {
//   new BackButton(backButton);
// });

const backButtons = document.querySelectorAll(
  ".back-button",
) as NodeListOf<HTMLElement>;

import("./components/back-button/back-button").then(({ BackButton }) => {
  backButtons.forEach((backButton) => {
    new BackButton(backButton);
  });
});

const navigationButtons = document.querySelectorAll(
  "[data-navigateButton]",
) as NodeListOf<HTMLElement>;

import("./components/page-changer").then(({ Navigator }) => {
  navigationButtons.forEach((item) => {
    new Navigator(item, item.dataset.page);
  });
});
