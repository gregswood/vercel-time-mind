export type Task = {
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
