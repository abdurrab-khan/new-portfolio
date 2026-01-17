import { useState } from "react";
import window95StartIcon from "@/assets/icons/window-95-start-icon.png";

function StartBtn() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <button
      className="bg-light-gray flex items-center border-t border-r border-b border-l border-t-white border-r-black border-b-black border-l-white px-1 py-1"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex size-full items-center gap-x-2 overflow-hidden">
        <span className="inline-block">
          <img src={window95StartIcon} alt="Windows 95 Start Icon" className="block h-6 w-6" />
        </span>
        <span>Start</span>
      </div>
    </button>
  );
}

export default StartBtn;
