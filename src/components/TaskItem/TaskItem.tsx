import { observer } from "mobx-react-lite";
import { useState } from "react";
import { taskStore, Task } from "src/stores";
import TaskItemActions from "./TaskItemActions";
import TaskCheckbox from "./TaskCheckbox";
import Chevron from "./Chevron";
import TaskTitle from "./TaskTitle";

type TaskItemProps = {
  task: Task;
};

const TaskItem = observer(({ task }: TaskItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const isSelected = taskStore.selectedTaskId === task.id;

  const handleClick = () => {
    taskStore.selectTask(task.id);
  };

  return (
    <div className="flex flex-col">
      <div
        className={`animation my-[4px] flex min-h-[38px] w-auto flex-row items-center justify-between gap-[8px] rounded-[10px] py-[0px] pl-[8px] pr-[4px] ${isSelected ? "bg-graphite bg-opacity-[8%]" : "hover:bg-graphite hover:bg-opacity-[4%]"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="flex w-full flex-row items-center gap-[8px]">
          <Chevron task={task} />
          <TaskCheckbox task={task} />
          <TaskTitle task={task} />
        </div>
        {(isHovered || isSelected) && (
          <TaskItemActions
            task={task}
            onExpand={() => taskStore.toggleTaskExpand(task.id)}
          />
        )}
      </div>

      {task.isExpanded && (
        <div className="ml-[16px] flex flex-col gap-[0px] border-l-[1px] border-gray-300 pl-[4px]">
          {task.subtasks.map((subtask) => (
            <TaskItem key={subtask.id} task={subtask} />
          ))}
        </div>
      )}
    </div>
  );
});

export default TaskItem;
