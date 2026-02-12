import { useState } from "react";

import Window from "../layout/Window";

import { getChildren, getNode } from "@/utils/tree-utils";

import type { FileExplorer as FileExplorerT, Browser } from "@/types/window";
import AppIcon from "../common/AppIcon";

interface IFileExplorerProps {
  app: Browser | FileExplorerT;
}

function FileExplorer({ app }: IFileExplorerProps) {
  const [locatedFile, setLocatedFile] = useState(getChildren(getNode(app.address)));

  console.log("Located File:", app);

  return (
    <Window app={app}>
      <div className="window-grid size-full overflow-auto p-1.5">
        {locatedFile.map((lf) => (
          <AppIcon
            key={lf.address}
            className="h-17 w-56 shrink-0"
            onUpdate={setLocatedFile}
            {...lf}
          />
        ))}
      </div>
    </Window>
  );
}

export default FileExplorer;
