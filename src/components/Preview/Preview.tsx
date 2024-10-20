import { observer } from "mobx-react-lite";
import { previewStore } from "src/stores";
import TaskPreview from "./TaskPreview";
import NoPreview from "./NoPreview";

const Preview = observer(() => {
  return (
    <div className="flex flex-col gap-[8px]">
      {previewStore.task ? <TaskPreview /> : <NoPreview />}
    </div>
  );
});

export default Preview;
