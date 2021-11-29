import Storage from "../storage";
const storage = new Storage();

export const renderInfo = (period = 7) => {
  const timePeriod = period;

  const today = new Date();

  const pastDate = today.getDate() - timePeriod;

  const data = storage.readAll();

  const completedInPeriod = data.filter(
    (task) => task.completedDate > pastDate && task.completedDate <= today,
  );

  const timeDuration = completedInPeriod.reduce(
    (acc, val) => acc + val.totalTime,
    0,
  );

  const totalTasks = completedInPeriod.length;

  const tasksCompletedP = document.querySelector("[data-tasks-completed]");
  tasksCompletedP.innerHTML = totalTasks.toString();

  const timeDurationP = document.querySelector("[data-time-duration]");
  timeDurationP.innerHTML = timeDuration.toString();
};
