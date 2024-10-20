import { Task } from "src/stores";

type TaskTitleProps = {
  task: Task;
  onToggleExpand: () => void;
};

const TaskTitle = ({ task, onToggleExpand }: TaskTitleProps) => {
  return (
    <button onClick={onToggleExpand}>
      <p>{task.title}</p>
    </button>
  );
};

export default TaskTitle;
