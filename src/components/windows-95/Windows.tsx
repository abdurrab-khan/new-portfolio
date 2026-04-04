import Desktop from "./windows/desktop/Desktop";
import Taskbar from "./windows/taskbar/Taskbar";
import OpenedApps from "./windows/desktop/OpenedApps";

function Windows() {
  return (
    <div className="relative flex size-full flex-col">
      <SwitchAlertBanner />
      <Desktop />
      <Taskbar />
      <OpenedApps />
    </div>
  );
}

const SwitchAlertBanner = () => {
  return (
    <div className="block w-full border-2 border-solid border-t-white border-r-gray-700 border-b-gray-700 border-l-white bg-[#c0c0c0] p-2 text-center text-sm font-bold text-black shadow-[inset_-1px_-1px_0px_#808080,inset_1px_1px_0px_#ffffff] sm:hidden">
      Best viewed on a desktop device for the full experience.
    </div>
  );
};

export default Windows;
