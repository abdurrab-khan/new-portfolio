import View from "../../common/View";
import Button from "../../common/Button";
import window95StartIcon from "@/assets/icons/start-icon.png";
import Separator from "../../common/Separator";

const StartPopover = () => {
  return (
    <View
      id="start-popover"
      popover="auto"
      style={{
        positionAnchor: "--start-btn-anchor",
        inset: "unset",
        bottom: "calc(anchor(top) + 0.10rem)",
        left: "anchor(left)",
      }}
    >
      <div className="flex h-56 w-40">
        <div className="bg-dark-gray relative flex h-full w-8">
          <p className="text-light-gray absolute right-1/2 bottom-6 translate-x-1/2 rotate-270 text-2xl font-bold">
            MyOS
          </p>
        </div>
        <div className="size-full flex flex-col items-start justify-end">
          <Separator type="horizontal" />
          <div className="w-full h-8 bg-blue-500"></div>
        </div>
      </div>
    </View>
  );
};

function StartBtn() {
  return (
    <div className="flex h-full items-center gap-x-2">
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
  );
}

export default StartBtn;
