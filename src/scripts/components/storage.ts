export default class Storage {
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
  addTimer(object: task) {
    localStorage.setItem(object.name, JSON.stringify(object));
  }
  deleteTime(name: string) {
    localStorage.deleteItem(name);
  }
  updateTimer(name: string, key: string, newValue: Partial<task>) {
    const timer = JSON.parse(localStorage.getItem(name));
    timer[key] = newValue;
    localStorage.setItem(name, JSON.stringify(timer));
  }
}
