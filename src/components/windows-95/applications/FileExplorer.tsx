import Window from "../layout/Window";
import type { FileExplorer as FileExplorerT, Browser } from "@/types/window";

interface IFileExplorerProps {
  app: Browser | FileExplorerT;
}

function FileExplorer({ app }: IFileExplorerProps) {
  return (
    <Window app={app}>
      <></>
    </Window>
  );
}

export default FileExplorer;
