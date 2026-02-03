import React from "react";
import type { Browser, FileExplorer } from "@/types/window";
import View from "./View";

interface IWindowLayoutProps {
  children: React.ReactNode;
  appData: Browser | FileExplorer;
}

function WindowLayout({ children, appData }: IWindowLayoutProps) {
  const { position, size } = appData;

  return (
    <View style={{ transform: `translate(${position.x}, ${position.y})` }}>
      <div
        style={{
          height: size.height,
          width: size.width,
        }}
      >
        {/* Main Content Body */}
        <div>{children}</div>
      </div>
    </View>
  );
}

export default WindowLayout;
