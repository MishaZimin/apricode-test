import { makeAutoObservable, reaction, toJS } from "mobx";
import { Task } from "./Task.type";
import { initialTasks } from "./Task.data";
import { addTaskToParent, toggleTask, deleteTask } from "./helpers";
import { findTaskById } from "src/stores/TaskStore/helpers";

class TaskStore {
  tasks: Task[] = initialTasks;
  selectedTaskId: number | null = null;
  searchQuery: string = "";

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
    reaction(
      () => toJS(this.tasks),
      () => this.syncWithLocalStorage(),
    );
  }

  selectTask(id: number) {
    this.selectedTaskId = id;
  }

  clearSelection() {
    this.selectedTaskId = null;
  }

  toggleTask(taskId: number, isCompleted: boolean) {
    toggleTask(taskId, isCompleted, this.tasks);
  }

  addTaskToParent(parentId: number, title: string, description: string) {
    addTaskToParent(parentId, title, description, this.tasks);
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

  searchTasks(query: string): Task[] {
    this.searchQuery = query;
    if (!query) return this.tasks;

    const lowerQuery = query.toLowerCase();

    const filterTasks = (tasks: Task[]): Task[] => {
      return tasks.reduce((result: Task[], task: Task) => {
        const matchesTask =
          task.title.toLowerCase().includes(lowerQuery) ||
          task.description.toLowerCase().includes(lowerQuery);

        const filteredSubtasks = task.subtasks
          ? filterTasks(task.subtasks)
          : [];

        if (matchesTask || filteredSubtasks.length > 0) {
          result.push({
            ...task,
            isExpanded: true,
            subtasks: filteredSubtasks,
          });
        }

        return result;
      }, []);
    };

    return filterTasks(this.tasks);
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
