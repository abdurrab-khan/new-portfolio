import window95StartIcon from "@/assets/icons/window-95-start-icon.png";
import Button from "../../common/Button";

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
    <div className="relative h-[calc(var(--taskbar-height)-1rem)]">
      <Button
        popoverTarget="start-popover"
        style={
          {
            anchorName: "--start-btn-anchor",
          } as React.CSSProperties
        }
        mainStyle="px-1 group-has-popover-open:border-r-0 group-has-popover-open:border-b-0  group-has-popover-open:border-t-2 group-has-popover-open:border-l-2"
        borderOneStyle="border-white group-has-popover-open:border-black"
        borderTwoStyle="border-black group-has-popover-open:border-white"
      >
        {/* START POPOVER */}
        <StartPopover />

        {/* BUTTON CONTENT */}
        <div className="flex size-full items-center gap-x-1 overflow-hidden px-0.5 py-0.5">
          <span className="inline-block">
            <img src={window95StartIcon} alt="Windows 95 Start Icon" className="block h-4 w-6" />
          </span>
          <span>Start</span>
        </div>
      </Button>
    </div>
  );
}

export default StartBtn;
