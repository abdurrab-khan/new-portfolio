import React, { type RefObject } from "react";

import View from "../View";

import type { WindowContent } from "@/types/window";
import Body from "./Body";
import Footer from "./Footer";
import Nav from "./Nav";
import { motion } from "motion/react";
import useMove from "@/hooks/useMove";
import useResize from "@/hooks/useResize";

interface IWindowLayoutProps {
  app: WindowContent;
  children: React.ReactNode;
}

function Window({ app, children }: IWindowLayoutProps) {
  const { id, type, state, address, position, size, titleBar } = app;

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
        zIndex: state !== "full" ? "var(--window-z-index)" : "9999999999999",
      }}
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
          height: state === "full" ? "100%" : size.height,
          width: state === "full" ? "100%" : size.width,
        }}
        className="flex min-h-(--window-titlebar-height) min-w-96 flex-col overflow-hidden select-none"
      >
        <Nav id={id} type={type} address={address} titleBar={titleBar} navRef={navRef} />
        <Body>{children}</Body>
        <Footer type={type} resizerRef={resizeBarRef} />
      </div>
    </View>
  );
}

export default Window;
