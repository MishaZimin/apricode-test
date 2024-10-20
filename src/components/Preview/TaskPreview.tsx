import { observer } from "mobx-react-lite";
import { previewStore } from "src/stores";

const TaskPreview = observer(() => {
  return (
    <>
      {previewStore.task && (
        <>
          <input
            id="title"
            type="text"
            value={previewStore.task.title}
            onChange={(e) => previewStore.setTitle(e.target.value)}
            className="w-full rounded-[8px] border border-gray-400 p-2"
            placeholder="Название задачи"
          />
          <textarea
            id="description"
            value={previewStore.task.description}
            onChange={(e) => previewStore.setDescription(e.target.value)}
            className="min-h-[120px] w-full rounded-[8px] border border-gray-400 p-2"
            placeholder="Описание задачи"
          />
        </>
      )}
    </>
  );
});

export default TaskPreview;
