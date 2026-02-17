import React, { useEffect } from "react";
import { useMotionValue, useSpring } from "motion/react";
import useStore from "@/zustand/store";

interface IUseResize {
  id: string;
  targetRef: React.RefObject<HTMLElement>;
  overLaysRef: React.RefObject<HTMLElement>;
  defaultSize: { width: number; height: number };
}

function useResize({ id, targetRef, overLaysRef, defaultSize }: IUseResize) {
  const isResizing = React.useRef(false);
  const lastMousePosition = React.useRef<{ x: number; y: number } | null>(null);

  const updateApp = useStore((state) => state.updateAppState);

  const mHeight = useMotionValue(defaultSize.height);
  const mWidth = useMotionValue(defaultSize.width);

  // Springs for smooth resizing animation.
  const height = useSpring(mHeight, {
    stiffness: 500,
    damping: 40,
    mass: 0.5,
  });

  const width = useSpring(mWidth, {
    stiffness: 500,
    damping: 40,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current || !lastMousePosition.current) return;

      const deltaX = e.clientX - lastMousePosition.current.x;
      const deltaY = e.clientY - lastMousePosition.current.y;

      mWidth.set(Math.max(100, mWidth.get() + deltaX)); // Minimum width of 100px
      mHeight.set(Math.max(100, mHeight.get() + deltaY)); // Minimum height of 100px

      lastMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      lastMousePosition.current = null;
      overLaysRef.current.style.opacity = "0";

      // Update after finishing resizing to ensure we have the final dimensions.
      updateApp(id, {
        size: { width: Math.round(mWidth.get()), height: Math.round(mHeight.get()) },
      });
    };

    const handleMouseDown = (e: MouseEvent) => {
      isResizing.current = true;
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
      overLaysRef.current.style.opacity = "1";
    };

    const target = targetRef.current;
    if (target) {
      target.addEventListener("mousedown", handleMouseDown);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      if (target) {
        target.removeEventListener("mousedown", handleMouseDown);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [id, mHeight, mWidth, overLaysRef, targetRef, updateApp]);

  return {
    height,
    width,
  };
}

export default useResize;
