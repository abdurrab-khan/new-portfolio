import useStore from "@/zustand/store";

import AppIcon from "../../common/AppIcon";
import backgroundImage from "@/assets/background.jpg";

import { getChildren, getNode } from "@/utils/tree-utils";
import { useState } from "react";
import type { AppType } from "@/types/app";

const DESKTOP_APPS = getChildren(getNode("C:\\Windows\\Desktop"));

function Desktop() {
  const [desktopApps, setDesktopApps] = useState<AppType[]>(DESKTOP_APPS);
  const { count, increment, decrement } = useStore((state) => state);

  return (
    <section
      className="size-full flex-1 p-2"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="app-grid size-full">
        {desktopApps.map((da, idx) => (
          <AppIcon key={idx} setAppUpdate={setDesktopApps} {...da} />
        ))}
      </div>
    </section>
  );
}

export default Desktop;
