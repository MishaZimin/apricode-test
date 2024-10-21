import clsx from "clsx";
import CheckboxIcon from "src/image/Checkbox.svg";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function Checkbox({ checked, onChange }: Props) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="flex flex-row items-center gap-[8px]"
    >
      <div
        className={clsx(
          checked && "border-mint bg-mint",
          "animation flex h-[16px] w-[16px] items-center justify-center rounded-[4px] border border-graphite border-opacity-[20%] hover:border-mint",
        )}
      >
        {checked && (
          <img className="h-[8px] w-[12px]" src={CheckboxIcon} alt="checked" />
        )}
      </div>
    </button>
  );
}
