import React from "react";
import WindowLayout from "../layout/WindowLayout";

import type { FileExplorer, Browser } from "@/types/window";

interface IFileExplorerProps {
  children: React.ReactNode;
  appData: Browser | FileExplorer;
}

function FileExplorer({ children, appData }: IFileExplorerProps) {
  return (
    <WindowLayout appData={appData}>
      <></>
    </WindowLayout>
  );
}

export default FileExplorer;
