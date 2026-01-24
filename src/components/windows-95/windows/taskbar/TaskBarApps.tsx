import React from "react";
import Button from "../../common/Button";
import folderIcon from "@/assets/icons/folder-icon.png";

const App = () => {
  return (
    <Button>
      <div className="font-ms-sans flex h-full items-center gap-x-0.5 p-1 font-semibold">
        <img src={folderIcon} className="h-full" />
        <span className="ml-1 text-sm whitespace-nowrap">My Computer</span>
      </div>
    </Button>
  );
};

function TaskBarApps() {
  return (
    <div className="flex h-full max-w-1/2 gap-x-3 py-0.75">
      <App />
      <App />
      <App />
    </div>
  );
}

export default TaskBarApps;
