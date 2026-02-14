import { useState } from "react";

import Window from "../layout/Window";
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
      <div className="window-grid size-full overflow-auto p-1.5">
        {locatedFile.map((lf) => (
          <AppIcon
            key={lf.address}
            app={lf}
            className="h-17 w-56 shrink-0"
            onUpdate={setLocatedFile}
          />
        ))}
      </div>
    </Window>
  );
}

export default FileExplorer;
