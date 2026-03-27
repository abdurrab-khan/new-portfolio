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
  children: React.ReactNode;
}

function Window({ app, children }: IWindowLayoutProps) {
  const { id, type, state, address, position, size, titleBar, zIndex = 1 } = app;
  const bringToFront = useStore((store) => store.bringToFront);

  const navRef = React.useRef<HTMLDivElement>(null);
  const resizeBarRef = React.useRef<HTMLDivElement>(null);
  const overLaysRef = React.useRef<HTMLDivElement>(null);

  const { x, y } = useMove({
    id,
    targetRef: navRef as RefObject<HTMLElement>,
    overLaysRef: overLaysRef as RefObject<HTMLElement>,
    defaultPosition: position,
  });

  const { height, width } = useResize({
    id,
    targetRef: resizeBarRef as RefObject<HTMLElement>,
    overLaysRef: overLaysRef as RefObject<HTMLElement>,
    defaultSize: size,
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
        }}
        className="border-yellow pointer-events-none absolute inset-0 z-(--window-z-index) size-full cursor-grabbing border-4 opacity-0"
      />

      <div
        style={{
          height: state === "full" ? "calc(100vh - 14px)" : size.height,
          width: state === "full" ? "calc(100vw - 14px)" : size.width,
        }}
        className="flex min-h-(--window-titlebar-height) min-w-64 flex-col overflow-hidden select-none sm:min-w-96"
      >
        <Nav id={id} type={type} address={address} titleBar={titleBar} navRef={navRef} />
        <Body>{children}</Body>
        <Footer type={type} resizerRef={resizeBarRef} />
      </div>
    </View>
  );
}

export default Window;
