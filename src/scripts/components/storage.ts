type timer = {
  name: string;
  category: "work" | "workout" | "personal";
  priority: "low" | "medium" | "high";
  totalTime: number;
  remainingTime: number;
  scheduledDate: Date;
  iconType: "weights" | "book" | "computer";
  running: boolean;
  completed: boolean;
};

export class Storage {
  readAll() {
    const titleArray = [...Array(localStorage.length).keys()]
      .slice()
      .map((i) => localStorage.key(i));
    const timers = titleArray.map((i) => JSON.parse(localStorage.getItem(i)));
    return timers;
  }
  readOne(name: string) {
    const timer = JSON.parse(localStorage.getItem(name));
    return timer;
  }
  addTimer(object: timer) {
    localStorage.setItem(object.name, JSON.stringify(object));
  }
  deleteTime(name: string) {
    localStorage.deleteItem(name);
  }
  updateTimer(name: string, key: string, newValue: Partial<timer>) {
    const timer = JSON.parse(localStorage.getItem(name));
    timer[key] = newValue;
    localStorage.setItem(name, JSON.stringify(timer));
  }
}
