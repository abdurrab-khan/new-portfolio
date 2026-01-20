import window95StartIcon from "@/assets/icons/window-95-start-icon.png";

const StartPopover = () => {
  return (
    <div
      id="start-popover"
      popover="auto"
      style={{
        positionAnchor: "--start-btn-anchor",
        inset: "unset",
        bottom: "calc(anchor(top) + 0.30rem)",
        left: "anchor(left)",
      }}
      className="peer bg-yellow h-80 w-48"
    ></div>
  );
};

function StartBtn() {
  return (
    <div className="relative h-[calc(var(--taskbar-height)-1rem)] min-w-16">
      <button
        popoverTarget="start-popover"
        style={{
          anchorName: "--start-btn-anchor",
        }}
        className="peer bg-light-gray border-dark-gray relative z-20 flex size-full items-center justify-center border-r-2 border-b-2 px-1.5 py-1 outline-0 outline-none active:border-t-2 active:border-r-0 active:border-b-0 active:border-l-2"
      >
        {/* START POPOVER */}
        <StartPopover />

        {/* BUTTON CONTENT */}
        <div className="peer-has-popover-open:border peer-has-popover-open:border-dash flex size-full items-center gap-x-1 overflow-hidden px-0.5 py-0.5">
          <span className="inline-block">
            <img src={window95StartIcon} alt="Windows 95 Start Icon" className="block h-4 w-6" />
          </span>
          <span>Start</span>
        </div>
      </button>

      <div className="absolute right-0 bottom-0 z-10 h-[calc(100%+0.15rem)] w-[calc(100%+0.15rem)] bg-white peer-active:bg-black"></div>
      <div className="absolute -right-[0.15rem] -bottom-[0.15rem] z-0 h-[calc(100%+0.30rem)] w-[calc(100%+0.30rem)] bg-black peer-active:bg-white"></div>
    </div>
  );
}

export default StartBtn;
