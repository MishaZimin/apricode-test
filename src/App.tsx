import TaskTree from "src/components/TaskTree/TaskTree";
import Preview from "src/components/Preview/Preview";
import TaskSearch from "./components/TaskSearch/TaskSearch";

const App = () => {
  return (
    <>
      <div className="flex h-screen min-h-screen w-full flex-col sm:flex-row">
        {/* Левая панель */}
        <div className="h-[calc(100vh/2)] w-full overflow-y-auto border-b-[1px] border-gray-400 p-4 sm:h-[calc(100vh)] sm:w-1/2 sm:border-b-0 sm:border-r-[1px]">
          <TaskSearch />
          <TaskTree />
        </div>
        {/* Правая панель */}
        <div className="max-h-full w-full overflow-y-auto bg-opacity-[4%] bg-none p-4 sm:w-1/2">
          <Preview />
        </div>
      </div>
    </>
  );
};

export default App;
