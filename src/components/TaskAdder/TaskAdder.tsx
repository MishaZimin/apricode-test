// src/components/TaskAdder/TaskAdder.js
import { taskStore } from "src/stores";
import { FaPlus } from "react-icons/fa6";

const TaskAdder = () => {
  const handleAddTask = () => {
    taskStore.addParentTask("Новая задача", "");
  };

  return (
    <div className="flex flex-row items-center gap-[8px]">
      <p className="text-[16px] font-semibold">Список задач</p>

      <button
        onClick={handleAddTask}
        className="animation flex h-[30px] w-[30px] items-center justify-center rounded-[8px] p-[4px] opacity-50 hover:bg-graphite hover:bg-opacity-[12%]"
      >
        <FaPlus className="h-[16px] w-[16px]" />
      </button>
    </div>
  );
};

export default TaskAdder;
