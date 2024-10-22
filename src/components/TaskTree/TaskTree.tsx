import { observer } from "mobx-react-lite";
import { taskStore } from "src/stores";
import TaskItem from "../TaskItem/TaskItem";

const TaskTree = observer(() => {
  return (
    <div className="flex flex-col gap-[8px]">
      {taskStore.searchTasks(taskStore.searchQuery).map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
});

export default TaskTree;
