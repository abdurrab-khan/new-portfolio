import React from "react";
import Window from "../layout/Window";

import type { FileExplorer, Browser } from "@/types/window";

interface IBrowserProps {
  app: Browser | FileExplorer;
}

function Browser({ app }: IBrowserProps) {
  return (
    <Window app={app}>
      <></>
    </Window>
  );
}

export default Browser;
