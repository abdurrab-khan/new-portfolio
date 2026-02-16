import useMove from "@/hooks/useMove";
import React, { type RefObject } from "react";

import View from "../View";

import type { WindowContent } from "@/types/window";
import Body from "./Body";
import Footer from "./Footer";
import Nav from "./Nav";

interface IWindowLayoutProps {
  app: WindowContent;
  children: React.ReactNode;
}

function Window({ app, children }: IWindowLayoutProps) {
  const { id, type, state, address, position, size, titleBar } = app;

  const navContainerRef = React.useRef<HTMLDivElement>(null);
  const mainContainerRef = React.useRef<HTMLDivElement>(null);
  const overLaysContainerRef = React.useRef<HTMLDivElement>(null);

  // useMove will handle the logic for moving the window around when the user clicks and drags the title bar.
  useMove(
    overLaysContainerRef as RefObject<HTMLElement>,
    navContainerRef as RefObject<HTMLElement>,
    mainContainerRef as RefObject<HTMLElement>,
  );

  return (
    <View
      style={{
        position: "absolute",
        left: (state !== "full" ? position.x : 0) + "px",
        top: (state !== "full" ? position.y : 0) + +"px",
        zIndex: state !== "full" ? "var(--window-z-index)" : "9999999999999",
      }}
      ref={mainContainerRef}
    >
      <div
        ref={overLaysContainerRef}
        className="border-yellow pointer-events-none absolute inset-0 z-(--window-z-index) size-full cursor-grabbing border-4 opacity-0"
      />

      <div
        style={{
          height: state === "full" ? "calc(100vh - 4px)" : size.height,
          width: state === "full" ? "calc(100vw - 4px)" : size.width,
        }}
        className="flex min-h-(--window-titlebar-height) min-w-96 flex-col overflow-hidden select-none"
      >
        <Nav
          id={id}
          type={type}
          address={address}
          titleBar={titleBar}
          navContainerRef={navContainerRef}
        />
        <Body>{children}</Body>
        {type === "file-explorer" && <Footer />}
      </div>
    </View>
  );
}

export default Window;
