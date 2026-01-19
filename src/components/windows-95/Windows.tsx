import Body from "./windows/Body";
import Taskbar from "./windows/taskbar/Taskbar";

function Windows() {
  return (
    <div className="flex size-full flex-col bg-[#008083]">
      <Body />
      <Taskbar />
    </div>
  );
}

export default Windows;
