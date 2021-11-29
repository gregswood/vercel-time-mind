import Storage from "../storage";
import { datediff } from "../../../utils/date";
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
