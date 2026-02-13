import { useState } from "react";
import AppIcon from "../../common/AppIcon";
import type { App } from "@/types/app";
import { getChildren, getNode } from "@/utils/tree-utils";

const DESKTOP_APPS = getChildren(getNode("C:\\Windows\\Desktop"));

function DesktopApps() {
  const [desktopApps, setDesktopApps] = useState<App[]>(DESKTOP_APPS);

  return (
    <div className="app-grid size-full">
      {desktopApps.map((da, idx) => (
        <AppIcon key={idx} app={da} onUpdate={setDesktopApps} />
      ))}
    </div>
  );
}

export default DesktopApps;
