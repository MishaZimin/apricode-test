export type Task = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isExpanded: boolean;
  subtasks: Task[];
};
