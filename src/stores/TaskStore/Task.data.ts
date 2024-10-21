import { Task } from "./Task.type";

export const initialTasks: Task[] = [
  {
    id: 1,
    title: "Новая задача",
    description: "",
    isCompleted: false,
    isExpanded: false,
    subtasks: [],
  },
];
