import useStore from "@/zustand/store";
import { useMotionValue, useSpring } from "motion/react";
import React, { useEffect } from "react";

interface IUseMove {
  id?: string;
  targetRef: React.RefObject<HTMLElement>;
  overLaysRef: React.RefObject<HTMLElement>;
  defaultPosition?: { x: number; y: number };
}

const DRAG_THRESHOLD = 5; // pixels before drag starts

function useMove({ id, targetRef, overLaysRef, defaultPosition = { x: 0, y: 0 } }: IUseMove) {
  const isDragging = React.useRef(false);
  const hasMoved = React.useRef(false);
  const startMouse = React.useRef<{ x: number; y: number } | null>(null);

  const updateApp = useStore((state) => state.updateAppState);

  // x, y represent the OFFSET (delta) from the element's current position — always start at 0.
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);

  // Springs for smooth animation.
  const x = useSpring(mX, {
    stiffness: 500,
    damping: 40,
    mass: 0.5,
  });

  const y = useSpring(mY, {
    stiffness: 500,
    damping: 40,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !startMouse.current) return;

      const deltaX = e.clientX - startMouse.current.x;
      const deltaY = e.clientY - startMouse.current.y;

      // Only start moving after exceeding the drag threshold
      if (!hasMoved.current) {
        if (Math.abs(deltaX) < DRAG_THRESHOLD && Math.abs(deltaY) < DRAG_THRESHOLD) return;
        hasMoved.current = true;
        overLaysRef.current.style.opacity = "0.5";
      }

      mX.set(deltaX);
      mY.set(deltaY);
    };

    const handleMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      overLaysRef.current.style.opacity = "0";

      if (hasMoved.current) {
        if (id) {
          // Window: update position by adding the drag delta to the original position.
          updateApp(id, {
            position: {
              x: Math.round(defaultPosition.x + mX.get()),
              y: Math.round(defaultPosition.y + mY.get()),
            },
          });
        } else {
          // AppIcon: accumulate the drag delta onto the existing transform.
          const currentTransform = targetRef.current.style.transform;
          const match = currentTransform.match(/translate\(\s*([^,]+)px,\s*([^)]+)px\s*\)/);
          const existingX = match ? parseFloat(match[1]) : 0;
          const existingY = match ? parseFloat(match[2]) : 0;

          targetRef.current.style.transform = `translate(${existingX + mX.get()}px, ${existingY + mY.get()}px)`;
        }
      }

      startMouse.current = null;
      hasMoved.current = false;
      mX.set(0);
      mY.set(0);
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      hasMoved.current = false;
      startMouse.current = { x: e.clientX, y: e.clientY };
      // Reset offset to 0 — overlay starts aligned with the element.
      mX.set(0);
      mY.set(0);
    };

    const target = targetRef.current;
    target.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      if (target) {
        target.removeEventListener("mousedown", handleMouseDown);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [defaultPosition, id, mX, mY, overLaysRef, targetRef, updateApp]);

  return {
    x,
    y,
  };
}

export default useMove;
