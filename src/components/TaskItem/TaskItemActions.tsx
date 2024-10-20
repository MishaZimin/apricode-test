import { observer } from "mobx-react-lite";

import { taskStore } from "src/stores";
import { Task } from "src/stores";

import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

type TaskItemActionsProps = {
  task: Task;
  onExpand: () => void;
};

const TaskItemActions = observer(({ task, onExpand }: TaskItemActionsProps) => {
  const handleAddSubtask = () => {
    onExpand();
    taskStore.addTaskToParent(task.id, "Новая задача", "");
  };

  const handleDeleteTask = () => {
    taskStore.deleteTask(task.id);
  };

  return (
    <div className="bg-graphite flex flex-row gap-[0px] rounded-[8px] bg-opacity-[4%]">
      <button
        onClick={handleAddSubtask}
        className="animation hover:bg-graphite flex h-[30px] w-[30px] items-center justify-center rounded-[8px] p-[4px] opacity-50 hover:bg-opacity-[12%]"
      >
        <FaPlus className="h-[16px] w-[16px]" />
      </button>
      <button
        onClick={handleDeleteTask}
        className="animation hover:bg-graphite flex h-[30px] w-[30px] items-center justify-center rounded-[8px] p-[4px] opacity-50 hover:bg-opacity-[12%]"
      >
        <MdDelete className="h-[16px] w-[16px]" />
      </button>
    </div>
  );
});

export default TaskItemActions;
