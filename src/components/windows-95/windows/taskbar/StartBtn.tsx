import window95StartIcon from "@/assets/icons/window-95-start-icon.png";

const StartPopover = () => {
  return (
    <div
      id="start-popover"
      popover="auto"
      style={{
        positionAnchor: "--start-btn-anchor",
        inset: "unset",
        bottom: "anchor(top)",
        left: "anchor(left)",
      }}
      className="bg-yellow mb-0.5 h-80 w-48"
    ></div>
  );
};

function StartBtn() {
  return (
    <button
      popoverTarget="start-popover"
      style={{
        anchorName: "--start-btn-anchor",
      }}
      className="bg-light-gray has-popover-open:bg-blue-500 flex h-[calc(var(--taskbar-height)-1.2rem)] min-w-16 items-center border-t border-r border-b border-l border-t-white border-r-black border-b-black border-l-white px-1 py-1 outline-0"
    >
      {/* BUTTON CONTENT */}
      <div className="flex size-full items-center gap-x-1 overflow-hidden px-0.5 py-0.5">
        <span className="inline-block">
          <img src={window95StartIcon} alt="Windows 95 Start Icon" className="block h-4 w-6" />
        </span>
        <span>Start</span>
      </div>

      {/* START POPOVER */}
      <StartPopover />
    </button>
  );
}

export default StartBtn;
