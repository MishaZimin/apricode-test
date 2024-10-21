import { observer } from "mobx-react-lite";

const NoPreview = observer(() => {
  return (
    <div className="flex justify-center pt-2">
      <p className="font-semibold">Задача не выбрана</p>
    </div>
  );
});

export default NoPreview;
