import { makeAutoObservable } from "mobx";

import { Task } from "src/stores";

class PreviewStore {
  task: Task | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTask(task: Task) {
    this.task = task;
  }

  setTitle(newTitle: string) {
    if (this.task) {
      this.task.title = newTitle;
    }
  }

  setDescription(newDescription: string) {
    if (this.task) {
      this.task.description = newDescription;
    }
  }

  clearTask() {
    this.task = null;
  }
}

const previewStore = new PreviewStore();
export default previewStore;
