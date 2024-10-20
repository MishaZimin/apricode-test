import { useState } from "react";
import { observer } from "mobx-react-lite";

import { VscChevronRight } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";

import { Task } from "src/stores";
import { previewStore } from "src/stores";

import TaskItemActions from "./TaskItemActions";
import TaskCheckbox from "./TaskCheckbox";

type TaskItemProps = {
  task: Task;
};

const TaskItem = observer(({ task }: TaskItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    previewStore.setTask(task);
  };

  return (
    <div className="flex flex-col gap-[4px]">
      <div
        className={`animation flex w-auto flex-row items-center justify-between gap-[8px] rounded-[10px] py-[4px] pl-[8px] pr-[4px] hover:bg-graphite hover:bg-opacity-[4%]`}
      >
        <div className="flex w-full flex-row items-center gap-[8px]">
          <button
            onClick={toggleExpand}
            className="flex h-[16px] w-[16px] items-center justify-center"
          >
            {isExpanded ? <VscChevronDown /> : <VscChevronRight />}
          </button>
          <TaskCheckbox task={task} />
          <button className="w-full text-left" onClick={toggleExpand}>
            <p>{task.title}</p>
          </button>
        </div>

        <TaskItemActions task={task} onExpand={() => setIsExpanded(true)} />
      </div>

      {isExpanded && (
        <div className="mb-0 ml-[16px] flex flex-col gap-[4px] border-l-[1px] border-gray-300 pl-[4px]">
          {task.subtasks.map((subtask) => (
            <TaskItem key={subtask.id} task={subtask} />
          ))}
        </div>
      )}
    </div>
  );
});

export default TaskItem;
