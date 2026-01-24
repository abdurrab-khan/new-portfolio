import StartBtn from "./StartBtn";
import TaskBarApps from "./TaskBarApps";
import Separator from "../../common/Separator";

const CustomSeparator = () => {
  return (
    <span className="after:border-dark-gray relative inline-block h-full w-2 before:absolute before:left-0 before:inline-block before:h-full before:w-full before:border-t-2 before:border-l-2 before:border-white after:absolute after:right-0 after:inline-block after:h-full after:w-full after:border-r-2 after:border-b-2" />
  );
};

function Taskbar() {
  return (
    <footer className="bg-light-gray h-(--taskbar-height) w-full">
      <div className="relative flex size-full items-center after:absolute after:top-0.5 after:h-0.5 after:w-full after:bg-white">
        <div className="flex h-[calc(var(--taskbar-height)-1rem)] w-full items-center justify-between gap-x-2 px-2">
          <div className="mt-1 flex size-full flex-1 gap-x-2">
            {/* START BUTTON */}
            <StartBtn />

            {/* SEPARATORS */}
            <Separator type="vertical" />
            <CustomSeparator />

            {/* TASKBAR APPS */}
            <TaskBarApps />
          </div>

          {/* Volume, network Section */}
          <div className="h-full w-16 bg-yellow-500"></div>
        </div>
      </div>
    </footer>
  );
}

export default Taskbar;
