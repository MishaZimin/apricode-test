import TaskTree from "src/components/TaskTree/TaskTree";
import Preview from "src/components/Preview/Preview";

const App = () => {
  return (
    <>
      <div className="flex flex-row w-full h-full min-h-svh">
        <div className="w-1/2 border-r-[1px] border-gray-400 p-4">
          <TaskTree />
        </div>
        <div className="w-1/2 bg-opacity-[4%] bg-none p-4">
          <Preview />
        </div>
      </div>
    </>
  );
};

export default App;
