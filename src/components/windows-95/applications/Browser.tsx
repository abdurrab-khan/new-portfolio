import React from "react";
import WindowLayout from "../layout/WindowLayout";

import type { FileExplorer, Browser } from "@/types/window";

interface IBrowserProps {
  children: React.ReactNode;
  appData: Browser | FileExplorer;
}

function Browser({ children, appData }: IBrowserProps) {
  return (
    <WindowLayout appData={appData}>
      <></>
    </WindowLayout>
  );
}

export default Browser;
