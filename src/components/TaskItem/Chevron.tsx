import { VscChevronRight } from "react-icons/vsc";
import { Task } from "src/stores";
import { toggleExpand } from "src/helpers/ToggleExpand";

type TaskChevronProps = {
  task: Task;
};

const Chevron = ({ task }: TaskChevronProps) => {
  return (
    <button
      onClick={() => toggleExpand(task)}
      className="flex h-[16px] w-[16px] items-center justify-center"
    >
      <span
        className={`transform transition-transform duration-200 ${
          task.isExpanded ? "rotate-90" : "rotate-0"
        }`}
      >
        <VscChevronRight />
      </span>
    </button>
  );
};

export default Chevron;
