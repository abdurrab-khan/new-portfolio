import React from "react";
import Window from "../layout/Window";

import type { FileExplorer, Browser } from "@/types/window";

interface IFileExplorerProps {
  children: React.ReactNode;
  appData: Browser | FileExplorer;
}

function FileExplorer({ children, appData }: IFileExplorerProps) {
  return (
    <Window appData={appData}>
      <></>
    </Window>
  );
}

export default FileExplorer;
