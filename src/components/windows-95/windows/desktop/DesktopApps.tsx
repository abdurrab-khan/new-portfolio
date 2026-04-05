import AppIcon from "../../common/AppIcon";
import { getChildren, getNode } from "@/utils/tree-utils";

const DESKTOP_APPS = getChildren(getNode("C:\\Windows\\Desktop"));

function DesktopApps() {
  return (
    <div className="app-grid size-full">
      {DESKTOP_APPS.map((da, idx) => (
        <AppIcon key={idx} app={da} />
      ))}
    </div>
  );
}

export default DesktopApps;
