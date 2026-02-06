import React from "react";
import Window from "../layout/Window";

import type { FileExplorer, Browser } from "@/types/window";

interface IBrowserProps {
  children: React.ReactNode;
  appData: Browser | FileExplorer;
}

function Browser({ children, appData }: IBrowserProps) {
  return (
    <Window appData={appData}>
      <></>
    </Window>
  );
}

export default Browser;
