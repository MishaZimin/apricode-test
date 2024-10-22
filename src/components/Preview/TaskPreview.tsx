import { observer } from "mobx-react-lite";
import { previewStore } from "src/stores";

const TaskPreview = observer(() => {
  return (
    <>
      {previewStore.task && (
        <>
          <input
            type="text"
            value={previewStore.task.title}
            onChange={(e) => previewStore.setTitle(e.target.value)}
            className="animation w-full rounded-[10px] border border-gray-400 px-[12px] py-[8px] focus:border-gray-500 focus:outline-none"
            placeholder="Название задачи"
          />
          <textarea
            value={previewStore.task.description}
            onChange={(e) => previewStore.setDescription(e.target.value)}
            className="animation min-h-[120px] w-full rounded-[10px] border border-gray-400 px-[12px] py-[8px] focus:border-gray-500 focus:outline-none"
            placeholder="Описание задачи"
          />
        </>
      )}
    </>
  );
});

export default TaskPreview;
