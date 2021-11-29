import Storage from "../../components/storage";
const storage = new Storage();

export const renderTimerPage = () => {
  const data = storage.readAll();
  const runningTask = data.filter((element) => element.running);

  const container = document.querySelector("[data-timer-box]");
  container.innerHTML = "";

  const timerHeader = document.querySelector("[data-timer-header]");

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
  }
};
