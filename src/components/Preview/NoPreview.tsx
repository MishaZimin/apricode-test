import { observer } from "mobx-react-lite";

const NoPreview = observer(() => {
  return (
    <div className="">
      <p>Выберите задачу для редактирования</p>
    </div>
  );
});

export default NoPreview;
