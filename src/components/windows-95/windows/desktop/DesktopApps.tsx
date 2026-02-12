import { useState } from "react";
import AppIcon from "../../common/AppIcon";
import type { AppType } from "@/types/app";
import { getChildren, getNode } from "@/utils/tree-utils";

const DESKTOP_APPS = getChildren(getNode("C:\\Windows\\Desktop"));

function DesktopApps() {
  const [desktopApps, setDesktopApps] = useState<AppType[]>(DESKTOP_APPS);

  console.log("Desktop Apps: ", desktopApps);

  return (
    <div className="app-grid size-full">
      {desktopApps.map((da, idx) => (
        <AppIcon key={idx} onUpdate={setDesktopApps} {...da} />
      ))}
    </div>
  );
}

export default DesktopApps;
