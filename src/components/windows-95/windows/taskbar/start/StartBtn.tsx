import Button from "../../../common/Button";
import window95StartIcon from "@/assets/icons/start-icon.png";
import Separator from "../../../common/Separator";
import StartPopover from "./StartPopover";
import CustomSeparator from "./CustomSeperator";

function StartBtn() {
  return (
    <div className="flex h-full gap-x-2">
      <div className="flex h-full shrink-0 items-center gap-x-2">
        <Button
          popoverTarget="start-popover"
          style={
            {
              anchorName: "--start-btn-anchor",
            } as React.CSSProperties
          }
          mainStyle="px-1 group-has-popover-open:border-r-transparent group-has-popover-open:border-b-transparent group-has-popover-open:border-t-dark-gray group-has-popover-open:border-l-dark-gray"
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
            <span className="font-ms-sans-bold">
              Start
            </span>
          </div>
        </Button>
      </div>

      {/* SEPARATORS */}
      <Separator type="vertical" />
      <CustomSeparator />
    </div>
  );
}

export default StartBtn;
