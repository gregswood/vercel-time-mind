import Storage from "../storage";
const storage = new Storage();

export const renderInfo = (period = 7) => {
  const data = storage.readAll();

  const completedInPeriod = data.filter(
    (task) => datediff(new Date(task.completedDate), new Date()) <= period,
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

const datediff = (first: Date, second: Date) => {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round(
    (second.valueOf() - first.valueOf()) / (1000 * 60 * 60 * 24),
  );
};
