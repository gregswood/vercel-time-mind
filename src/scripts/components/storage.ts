type Task = {
  taskName: string;
  category: "work" | "workout" | "personal";
  priority: "low" | "medium" | "high";
  totalTime: number;
  remainingTime: number;
  scheduledDate: Date;
  iconType: "weights" | "book" | "computer";
  running: boolean;
  completed: boolean;
};

export default {
  readAll() {
    const titleArray = [...Array(localStorage.length).keys()]
      .slice()
      .map((i) => localStorage.key(i));
    const tasks = titleArray.map((i) => JSON.parse(localStorage.getItem(i)));
    return tasks;
  },
  readOne(name: string) {
    const task = JSON.parse(localStorage.getItem(name));
    return task;
  },
  addTask(object: Task) {
    localStorage.setItem(object.taskName, JSON.stringify(object));
  },
  deleteTime(name: string) {
    localStorage.deleteItem(name);
  },
  updateTImer(name: string, key: string, newValue: Partial<Task>) {
    const timer = JSON.parse(localStorage.getItem(name));
    timer[key] = newValue;
    localStorage.setItem(name, JSON.stringify(timer));
  },
};
