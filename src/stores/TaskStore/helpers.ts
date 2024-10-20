import { Task } from "./Task.type";

export const findTaskById = (id: number, tasks: Task[]): Task | undefined => {
  for (const task of tasks) {
    if (task.id === id) return task;
    const foundInSubtasks = findTaskById(id, task.subtasks);
    if (foundInSubtasks) return foundInSubtasks;
  }
  return undefined;
};

export const findParentTask = (
  subtaskId: number,
  tasks: Task[],
): Task | undefined => {
  for (const task of tasks) {
    if (task.subtasks.some((subtask: Task) => subtask.id === subtaskId)) {
      return task;
    }
    const foundInSubtasks = findParentTask(subtaskId, task.subtasks);
    if (foundInSubtasks) return foundInSubtasks;
  }
  return undefined;
};

export const deleteTaskById = (taskId: number, tasks: Task[]): Task[] => {
  return tasks.filter((task) => {
    if (task.id === taskId) {
      return false;
    }
    task.subtasks = deleteTaskById(taskId, task.subtasks);
    return true;
  });
};

export const addTaskToParent = (
  parentId: number,
  title: string,
  description: string,
  tasks: Task[],
) => {
  const parentTask = findTaskById(parentId, tasks);
  if (parentTask) {
    const newSubtask: Task = {
      id: Date.now(),
      title,
      description,
      isCompleted: false,
      subtasks: [],
    };
    parentTask.subtasks.push(newSubtask);
  }
};

export const toggleSubtasksCompletion = (task: Task, isCompleted: boolean) => {
  task.subtasks.forEach((subtask: Task) => {
    subtask.isCompleted = isCompleted;
    toggleSubtasksCompletion(subtask, isCompleted);
  });
};

export const updateParentTaskStatus = (task: Task, tasks: Task[]) => {
  if (task.subtasks.length > 0) {
    task.isCompleted = task.subtasks.every(
      (subtask: Task) => subtask.isCompleted,
    );
  }

  const parentTask = findParentTask(task.id, tasks);
  if (parentTask) {
    updateParentTaskStatus(parentTask, tasks);

    parentTask.isCompleted = parentTask.subtasks.every(
      (subtask: Task) => subtask.isCompleted,
    );
  }
};

export const toggleTask = (
  taskId: number,
  isCompleted: boolean,
  tasks: Task[],
) => {
  const task = findTaskById(taskId, tasks);
  if (task) {
    task.isCompleted = isCompleted;
    toggleSubtasksCompletion(task, isCompleted);
    updateParentTaskStatus(task, tasks);
  }
};

export const deleteTask = (taskId: number, tasks: Task[]): Task[] => {
  return deleteTaskById(taskId, tasks);
};
