import Window from "../layout/Window";

import type { FileExplorer, Browser } from "@/types/window";

interface IFileExplorerProps {
  app: Browser | FileExplorer;
}

function FileExplorer({ app }: IFileExplorerProps) {
  return (
    <Window app={app}>
      <></>
    </Window>
  );
}

export default FileExplorer;
