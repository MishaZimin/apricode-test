import { observer } from "mobx-react-lite";

import { taskStore } from "src/stores";
import { Task } from "src/stores";

type TaskCheckboxProps = {
  task: Task;
};

const TaskCheckbox = observer(({ task }: TaskCheckboxProps) => {
  return (
    <input
      className="h-[16px] w-[16px]"
      type="checkbox"
      checked={task.isCompleted}
      onChange={() => taskStore.toggleTask(task.id, !task.isCompleted)}
    />
  );
});

export default TaskCheckbox;
