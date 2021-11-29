import { Task } from "../../task";
import { renderRunningTask } from "../running-task/running-task";
import Storage from "../storage";
const storage = new Storage();

export const formatTime = (time: number) => {
  const hours = Math.floor(time / 3600);
  let hourDisplay = hours.toString();
  const minutes = Math.floor((time % 3600) / 60);
  let minuteDisplay = minutes.toString();
  const seconds = (time % 3600) % 60;
  let secondDisplay = seconds.toString();
  if (hours < 10) {
    hourDisplay = `0${hours}`;
  }
  if (minutes < 10) {
    minuteDisplay = `0${minutes}`;
  }
  if (seconds < 10) {
    secondDisplay = `0${seconds}`;
  }
  return `${hourDisplay}:${minuteDisplay}:${secondDisplay}`;
};

export const createTimer = () => {
  const tasks: Task[] = storage.readAll();
  const runningTask = tasks.filter((element: Task) => element.running);
  const TIME_LIMIT = runningTask[0].totalTime;
  let timePassed = runningTask[0].totalTime - runningTask[0].remainingTime;
  let timeLeft = runningTask[0].remainingTime;

  let timerInterval: null | NodeJS.Timer = null;

  const setCircleDashArray = () => {
    const circleDashArray = `${(calculateTimeFraction() * 283).toFixed(0)} 283`;
    document
      .getElementById("timer-remaining")
      .setAttribute("stroke-dasharray", circleDashArray);
  };

  const startTimer = () => {
    timerInterval = setInterval(() => {
      timePassed++;
      if (TIME_LIMIT - timePassed < 0) {
        timeLeft = 0;
        storage.updateTimer(runningTask[0].taskName, "remainingTime", timeLeft);
        storage.updateTimer(runningTask[0].taskName, "running", false);
        storage.updateTimer(runningTask[0].taskName, "completed", true);
      } else {
        timeLeft = TIME_LIMIT - timePassed;
        storage.updateTimer(runningTask[0].taskName, "remainingTime", timeLeft);
        renderRunningTask();
      }
      document.getElementById("timer-label").innerHTML = formatTime(timeLeft);

      setCircleDashArray();
    }, 1000);
    return timerInterval;
  };

  const calculateTimeFraction = (): number => {
    const rawTime = timeLeft / TIME_LIMIT;
    return rawTime - (1 / TIME_LIMIT) * (1 - rawTime);
  };

  document.getElementById("animation").innerHTML = `...`;
  const myTimer = startTimer();

  document.getElementById("animation").innerHTML = `
  <div class="timer">
      <svg class="timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="timer__circle">
              <circle class="timer__elapsed" cx="50" cy="50" r="45" />
              <path
                id="timer-remaining"
                stroke-dasharray="283"
                class="timer__remaining"
                d="
                  M 50 50
                  m -45 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0
                  "
              ></path>
          </g>
      </svg>
      <span id="timer-label" class="timer__label">
          ${formatTime(timeLeft)}
      </span>
  </div>
  `;
  return myTimer;
};

export const stopTimer = () => {
  const id = storage
    .readAll()
    .filter((element: Task) => element.running)[0].running;
  clearInterval(id);
};
