import { observer } from "mobx-react-lite";
import { taskStore, Task } from "src/stores";
import { Checkbox } from "src/ui/Checkbox";

type TaskCheckboxProps = {
  task: Task;
};

const TaskCheckbox = observer(({ task }: TaskCheckboxProps) => {
  return (
    <>
      <Checkbox
        checked={task.isCompleted}
        onChange={() => taskStore.toggleTask(task.id, !task.isCompleted)}
      />
    </>
  );
});

export default TaskCheckbox;
