import React from "react";
import Window from "../layout/Window";

import type { FileExplorer, Browser as BrowserT } from "@/types/window";

interface IBrowserProps {
  app: BrowserT | FileExplorer;
}

function Browser({ app }: IBrowserProps) {
  return (
    <Window app={app}>
      <></>
    </Window>
  );
}

export default Browser;
