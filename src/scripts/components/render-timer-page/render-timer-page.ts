import Storage from "../../components/storage";
const storage = new Storage();

export const renderTimerPage = () => {
  const data = storage.readAll();
  const runningTask = data.filter((element) => element.running);

  const container = document.querySelector("[data-timer-box]");
  container.innerHTML = "";

  const timerHeader = document.querySelector("[data-timer-header]");
  const timerControls = document.querySelector("[data-timer-controls]");

  if (!runningTask.length) {
    const h2 = document.createElement("h2");
    h2.textContent = "No timer Running!";
    container.appendChild(h2);
    return;
  } else {
    timerHeader.innerHTML = `      <div data-timer-header class="page-header">
    <button class="back-button">
      <img
        src="https://res.cloudinary.com/space48/image/upload/v1637854386/back_dtxfto.png"
      />
    </button>
    <h2 class="page-header__title">Timer</h2>
    <div class="category category--${runningTask[0].priority}"">
    <p class="category__text">${runningTask[0].category}</p>
    </div>
  </div>
`;

    container.innerHTML = `
    <div data-timer-box>
      <div class="task-title-box">
        <img
          src="https://res.cloudinary.com/space48/image/upload/v1637842127/time_r2npkx.png"
          class="task-title-box__timer-icon"
        />
        <p class="task-title-box__title">${runningTask[0].taskName}</p>
      </div>
      <div class="category">
        <p class="category__text">${runningTask[0].category}</p>
      </div>
      <div class="countdown-timer" id="animation"></div>
    </div>`;

    timerControls.innerHTML = `<div id="pause" class="timer-control">
    <button class="round-button round-button__timer-control">
      <img
        src="https://res.cloudinary.com/space48/image/upload/v1637927613/pause_hen8g3.png"
      />
    </button>
    <p class="timer-control__label">Pause</p>
  </div>
  <div class="timer-control">
    <button
      data-complete-task
      class="round-button round-button__timer-control"
    >
      <img
        src="https://res.cloudinary.com/space48/image/upload/v1638200274/tick_hjpnfh.png"
      />
    </button>
    <p class="timer-control__label">Completed</p>
  </div>

  <div class="timer-control">
    <button
      data-delete-task
      class="round-button round-button__timer-control"
    >
      <img
        src="https://res.cloudinary.com/space48/image/upload/v1637927613/x_joorz2.png"
      />
    </button>
    <p class="timer-control__label">Delete</p>
  </div>`;

    const pauseButton = document.getElementById("pause") as HTMLFormElement;
    if (pauseButton) {
      import("../timer-controls/pause").then(({ PauseButton }) => {
        new PauseButton(pauseButton);
      });
    }

    const backButtons = document.querySelectorAll(
      ".back-button",
    ) as NodeListOf<HTMLElement>;

    if (backButtons.length > 0) {
      import("../back-button/back-button").then(({ BackButton }) => {
        backButtons.forEach((backButton) => {
          new BackButton(backButton);
        });
      });
    }

    const deleteButton = document.querySelector(
      "[data-delete-task]",
    ) as HTMLElement;

    import("../delete-button/delete-button").then(({ DeleteButton }) => {
      new DeleteButton(deleteButton);
    });

    const completeButton = document.querySelector(
      "[data-complete-task]",
    ) as HTMLElement;

    import("../complete-button/complete-button").then(({ CompleteButton }) => {
      new CompleteButton(completeButton);
    });
  }
};
