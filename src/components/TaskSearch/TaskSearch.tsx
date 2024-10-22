import { observer } from "mobx-react-lite";
import { taskStore } from "src/stores";
import { IoSearch, IoClose } from "react-icons/io5";

const TaskSearch = observer(() => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    taskStore.searchTasks(query);
  };

  const clearSearch = () => {
    taskStore.searchQuery = "";
    taskStore.searchTasks("");
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Найти задачу"
        value={taskStore.searchQuery}
        onChange={handleSearchChange}
        className="animation w-full rounded-[10px] border border-gray-400 px-[12px] py-[8px] focus:border-gray-500 focus:outline-none"
      />
      <div className="animation absolute right-1 top-1 mx-auto flex h-[34px] w-[34px] items-center justify-center rounded-[8px] text-center text-gray-500">
        <IoSearch />
      </div>
      <button
        onClick={clearSearch}
        className="absolute right-10 top-1 mx-auto flex h-[34px] items-center justify-center rounded-[8px] text-center text-gray-500"
        aria-label="Clear search"
      >
        <IoClose />
      </button>
    </div>
  );
});

export default TaskSearch;
