export type Task = {
  taskName: string;
  category: "work" | "workout" | "personal";
  priority: "low" | "medium" | "high";
  totalTime: number;
  remainingTime: number;
  scheduledDate: string;
  completedDate: string;
  iconType: "weights" | "book" | "computer";
  running: NodeJS.Timer | undefined;
  completed: boolean;
};
