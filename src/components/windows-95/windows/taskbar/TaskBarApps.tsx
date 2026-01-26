import Button from "../../common/Button";
import folderIcon from "@/assets/icons/taskbar-folder-icon.png";

const App = () => {
  return (
    <Button mainStyle="bg-checkerboard min-w-36 shrink-0">
      <div className="flex h-full items-center gap-x-0.5 p-1 font-semibold overflow-hidden">
        <img src={folderIcon} className="h-full shrink-0" />
        <span className="ml-1 font-ms-sans-bold truncate">My Computer</span>
      </div>
    </Button>
  );
};

function TaskBarApps() {
  return (
    <div className="flex h-full gap-x-2.5 py-0.75 ml-1.5 overflow-hidden">
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
    </div>
  );
}

export default TaskBarApps;
