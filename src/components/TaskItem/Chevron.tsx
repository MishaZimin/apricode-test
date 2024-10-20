import { VscChevronRight } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";

const Chevron = (toggleExpand: () => void, isExpanded: boolean) => {
  return (
    <button
      onClick={toggleExpand}
      className="flex h-[16px] w-[16px] items-center justify-center"
    >
      {isExpanded ? <VscChevronDown /> : <VscChevronRight />}
    </button>
  );
};
export default Chevron;
