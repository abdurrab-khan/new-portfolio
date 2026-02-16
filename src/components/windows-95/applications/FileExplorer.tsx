import { useState } from "react";

import Window from "../layout/window/Window";
import AppIcon from "../common/AppIcon";

import { getChildren, getNode } from "@/utils/tree-utils";

import type { WindowContent } from "@/types/window";

interface IFileExplorerProps {
  app: WindowContent<"file-explorer">;
}

function FileExplorer({ app }: IFileExplorerProps) {
  const [locatedFile, setLocatedFile] = useState(getChildren(getNode(app.address)));

  return (
    <Window app={app}>
      <div className="window-grid win95-scroll size-full overflow-y-auto p-1.5">
        {[...locatedFile].map((lf) => (
          <AppIcon key={lf.address} app={lf} className="shrink-0" />
        ))}
      </div>
    </Window>
  );
}

export default FileExplorer;
