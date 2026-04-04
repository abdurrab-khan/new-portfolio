import React, { type RefObject } from "react";

import View from "../View";

import type { WindowContent } from "@/types/window";
import Body from "./Body";
import Footer from "./Footer";
import Nav from "./Nav";
import { motion } from "motion/react";
import useMove from "@/hooks/useMove";
import useResize from "@/hooks/useResize";
import useStore from "@/zustand/store";

interface IWindowLayoutProps {
  app: WindowContent;
  contentLength?: number;
  children: React.ReactNode;
}

function Window({ app, contentLength, children }: IWindowLayoutProps) {
  const { id, type, state, position, size, zIndex = 1 } = app;
  const bringToFront = useStore((store) => store.bringToFront);

  const navRef = React.useRef<HTMLDivElement>(null);
  const resizeBarRef = React.useRef<HTMLDivElement>(null);
  const overLaysRef = React.useRef<HTMLDivElement>(null);

  const minSize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 640) {
      return {
        width: 406,
        height: 260,
      };
    } else {
      return {
        width: 256,
        height: 240,
      };
    }
  };

  const { x, y } = useMove({
    id,
    state,
    defaultPosition: position,
    targetRef: navRef as RefObject<HTMLElement>,
    overLaysRef: overLaysRef as RefObject<HTMLElement>,
  });

  const { height, width } = useResize({
    id,
    state,
    limit: minSize(),
    defaultSize: size,
    targetRef: resizeBarRef as RefObject<HTMLElement>,
    overLaysRef: overLaysRef as RefObject<HTMLElement>,
  });

  return (
    <View
      style={{
        position: "absolute",
        left: (state !== "full" ? position.x : 0) + "px",
        top: (state !== "full" ? position.y : 0) + "px",
        zIndex: state !== "full" ? `calc(var(--window-z-index)+${zIndex})` : "9999999999999",
        isolation: "isolate",
      }}
      onPointerDownCapture={() => bringToFront(id)}
    >
      <motion.div
        ref={overLaysRef}
        style={{
          height,
          width,
          translateX: x,
          translateY: y,
          borderTop: "2px solid #ffffff",
          borderLeft: "2px solid #ffffff",
          borderRight: "2px solid #808080",
          borderBottom: "2px solid #808080",
          boxShadow: "inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #000000",
        }}
        className="pointer-events-none absolute inset-0 z-(--window-z-index) size-full cursor-grabbing opacity-0"
      />

      <div
        style={{
          height: state === "full" ? "calc(100vh - 14px)" : size.height,
          width: state === "full" ? "calc(100vw - 14px)" : size.width,
        }}
        className="flex min-h-56 min-w-64 flex-col overflow-hidden select-none sm:min-h-65 sm:min-w-101.5"
      >
        <Nav id={id} state={state} app={app} navRef={navRef} />
        <Body>{children}</Body>
        <Footer contentLength={contentLength} state={state} type={type} resizerRef={resizeBarRef} />
      </div>
    </View>
  );
}

export default Window;
