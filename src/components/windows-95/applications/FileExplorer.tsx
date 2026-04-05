import Window from "../layout/window/Window";
import AppIcon from "../common/AppIcon";

import { getChildren, getNode } from "@/utils/tree-utils";

import type { WindowContent } from "@/types/window";

interface IFileExplorerProps {
  app: WindowContent;
}

function FileExplorer({ app }: IFileExplorerProps) {
  const locatedFile = getChildren(getNode(app.address));

  return (
    <Window contentLength={locatedFile.length} app={app}>
      <div className="window-grid size-full overflow-y-auto p-1.5">
        {[...locatedFile].map((lf) => (
          <AppIcon key={lf.address} app={lf} className="shrink-0" />
        ))}
      </div>
    </Window>
  );
}

export default FileExplorer;
