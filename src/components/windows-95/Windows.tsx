import Desktop from "./windows/desktop/Desktop";
import Taskbar from "./windows/taskbar/Taskbar";

function Windows() {
  return (
    <div className="flex size-full flex-col">
      <Desktop />
      <Taskbar />
    </div>
  );
}

export default Windows;
