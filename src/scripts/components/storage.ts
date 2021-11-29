import { Task } from "../task";

export default class Storage {
  readAll(): Task[] {
    const titleArray = [...Array(localStorage.length).keys()]
      .slice()
      .map((i) => localStorage.key(i));
    const tasks = titleArray.map((i) => JSON.parse(localStorage.getItem(i)));
    return tasks;
  }
  readOne(name: string): Task {
    const task = JSON.parse(localStorage.getItem(name));
    return task;
  }
  addTask(object: Task) {
    localStorage.setItem(object.taskName, JSON.stringify(object));
  }
  deleteTime(name: string) {
    localStorage.removeItem(name);
  }
  updateTimer(
    name: string,
    key: string,
    newValue: string | number | boolean | NodeJS.Timer,
  ) {
    const timer = JSON.parse(localStorage.getItem(name));
    timer[key] = newValue;
    localStorage.setItem(name, JSON.stringify(timer));
  }
}
