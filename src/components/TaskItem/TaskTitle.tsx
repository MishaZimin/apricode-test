import { observer } from "mobx-react-lite";
import { Task } from "src/stores";
import { toggleExpand } from "src/helpers/ToggleExpand";

type TaskTitleProps = {
  task: Task;
};

const TaskTitle = observer(({ task }: TaskTitleProps) => {
  return (
    <button
      className="flex w-full text-left"
      onClick={() => toggleExpand(task)}
    >
      <p>{task.title}</p>
    </button>
  );
});

export default TaskTitle;
