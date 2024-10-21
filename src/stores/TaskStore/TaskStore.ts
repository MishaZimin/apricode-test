import { makeAutoObservable, reaction, toJS } from "mobx";
import { Task } from "./Task.type";
import { initialTasks } from "./Task.data";
import { addTaskToParent, toggleTask, deleteTask } from "./helpers";
import { findTaskById } from "src/stores/TaskStore/helpers";

class TaskStore {
  tasks: Task[] = initialTasks;
  selectedTaskId: number | null = null;

  selectTask(id: number) {
    this.selectedTaskId = id;
  }
  clearSelection() {
    this.selectedTaskId = null;
  }

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
    reaction(
      () => toJS(this.tasks),
      () => this.syncWithLocalStorage(),
    );
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

  toggleTaskExpand(taskId: number) {
    const task = findTaskById(taskId, this.tasks);
    if (task) {
      task.isExpanded = !task.isExpanded;
    }
  }

  private loadFromLocalStorage() {
    const data = localStorage.getItem("tasks");
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }

  private syncWithLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}

const taskStore = new TaskStore();
export default taskStore;
