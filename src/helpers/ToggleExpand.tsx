import { taskStore, Task, previewStore } from "src/stores";

export const toggleExpand = (task: Task) => {
  taskStore.toggleTaskExpand(task.id);
  previewStore.setTask(task);
};
