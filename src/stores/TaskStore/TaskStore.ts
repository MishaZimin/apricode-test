import { makeAutoObservable } from "mobx";

import { Task } from "./Task.type";
import { initialTasks } from "./Task.data";
import { addTaskToParent, toggleTask, deleteTask } from "./helpers";

class TaskStore {
  tasks: Task[] = [];

  constructor() {
    makeAutoObservable(this);
    this.initializeTasks();
  }

  private initializeTasks() {
    this.tasks = initialTasks;
  }

  addTaskToParent(parentId: number, title: string, description: string) {
    addTaskToParent(parentId, title, description, this.tasks);
  }

  toggleTask(taskId: number, isCompleted: boolean) {
    toggleTask(taskId, isCompleted, this.tasks);
  }

  deleteTask(taskId: number) {
    if (taskId !== 1) this.tasks = deleteTask(taskId, this.tasks);
  }
}

const taskStore = new TaskStore();
export default taskStore;
