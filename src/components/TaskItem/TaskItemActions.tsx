import { observer } from "mobx-react-lite";
import { taskStore, Task } from "src/stores";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

type TaskItemActionsProps = {
  task: Task;
  onExpand: () => void;
};

const TaskItemActions = observer(({ task, onExpand }: TaskItemActionsProps) => {
  const handleAddSubtask = () => {
    if (!task.isExpanded) onExpand();
    taskStore.addTaskToParent(task.id, "Новая задача", "");
  };

  const handleDeleteTask = () => {
    taskStore.deleteTask(task.id);
  };

  return (
    <div className="animation flex flex-row gap-[0px] rounded-[8px] bg-graphite bg-opacity-[0%]">
      <button
        onClick={handleAddSubtask}
        className="animation flex h-[30px] w-[30px] items-center justify-center rounded-[8px] p-[4px] opacity-50 hover:bg-graphite hover:bg-opacity-[12%]"
      >
        <FaPlus className="h-[16px] w-[16px]" />
      </button>
      <button
        onClick={handleDeleteTask}
        className="animation flex h-[30px] w-[30px] items-center justify-center rounded-[8px] p-[4px] opacity-50 hover:bg-graphite hover:bg-opacity-[12%]"
      >
        <MdDelete className="h-[16px] w-[16px]" />
      </button>
    </div>
  );
});

export default TaskItemActions;
