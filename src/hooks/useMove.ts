import React, { useCallback, useEffect, useRef } from "react";

/* ─── Configuration ─────────────────────────────────────────── */

const LERP_FACTOR = 0.15; // 0.15 = smooth trail, 1.0 = instant snap
const SNAP_THRESHOLD = 0.5; // Stop animating when within this distance (px)
const MOVE_DEAD_ZONE = 40; // Mouse must travel this far before drag begins (px)

/* ─── Helpers ───────────────────────────────────────────────── */

function lerp(current: number, target: number, factor: number) {
  return current + (target - current) * factor;
}

type ElementRef = React.RefObject<HTMLElement> | null;
type Point = { x: number; y: number };

const ORIGIN: Point = { x: 0, y: 0 };

/** Parse `translate(Xpx, Ypx)` from an element's inline style. */
function parseTranslate(el: HTMLElement | null): Point {
  const raw = el?.style.transform || "";
  const match = raw.match(/translate\((-?[\d.]+)px,\s*(-?[\d.]+)px\)/);
  return match ? { x: parseFloat(match[1]), y: parseFloat(match[2]) } : { ...ORIGIN };
}

/* ─── Hook ──────────────────────────────────────────────────── */

function useMove(
  overLaysContainer: ElementRef,
  triggerContainer: ElementRef,
  mainContainer?: ElementRef,
) {
  /* --- Drag state --- */
  const isDragging = useRef(false);
  const isPending = useRef(false);

  /* --- Position tracking --- */
  const startMouse = useRef<Point>({ ...ORIGIN });
  const startTranslate = useRef<Point>({ ...ORIGIN });
  const targetPos = useRef<Point>({ ...ORIGIN });
  const currentPos = useRef<Point>({ ...ORIGIN });
  const mainStartOffset = useRef<Point>({ ...ORIGIN });

  /* --- Animation --- */
  const rafId = useRef<number | null>(null);

  /** Resolve which container holds the persisted position. */
  const getMainCont = useCallback(
    () => mainContainer || triggerContainer,
    [mainContainer, triggerContainer],
  );

  /* ── Animation loop ─────────────────────────────────────── */
  const animate = useCallback(
    function animateFrame(): void {
      if (!overLaysContainer?.current) return;

      // Interpolate toward target
      const nx = lerp(currentPos.current.x, targetPos.current.x, LERP_FACTOR);
      const ny = lerp(currentPos.current.y, targetPos.current.y, LERP_FACTOR);

      currentPos.current = { x: nx, y: ny };
      overLaysContainer.current.style.transform = `translate(${nx}px, ${ny}px)`;

      // Check convergence
      const dx = Math.abs(targetPos.current.x - nx);
      const dy = Math.abs(targetPos.current.y - ny);
      const hasConverged = dx <= SNAP_THRESHOLD && dy <= SNAP_THRESHOLD;

      if (isDragging.current || !hasConverged) {
        rafId.current = requestAnimationFrame(animateFrame);
      } else {
        // Snap to exact final position
        currentPos.current = { ...targetPos.current };
        overLaysContainer.current.style.transform = `translate(${targetPos.current.x}px, ${targetPos.current.y}px)`;
        rafId.current = null;
      }
    },
    [overLaysContainer],
  );

  const startAnimationLoop = useCallback(() => {
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  /* ── Event handlers ─────────────────────────────────────── */
  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      if (!overLaysContainer?.current) return;

      isPending.current = true;
      startMouse.current = { x: e.clientX, y: e.clientY };

      // Show the overlay ghost at half opacity
      overLaysContainer.current.style.opacity = "0.5";

      // Snapshot the main container's accumulated offset
      mainStartOffset.current = parseTranslate(getMainCont()?.current ?? null);

      // Snapshot the overlay's current transform (always 0,0 after reset)
      const parsed = parseTranslate(overLaysContainer.current);
      startTranslate.current = parsed;
      currentPos.current = parsed;
      targetPos.current = parsed;
    },
    [getMainCont, overLaysContainer],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isPending.current && !isDragging.current) return;

      const dx = e.clientX - startMouse.current.x;
      const dy = e.clientY - startMouse.current.y;

      // Dead-zone gate: don't begin dragging until threshold crossed
      if (isPending.current && !isDragging.current) {
        if (Math.hypot(dx, dy) < MOVE_DEAD_ZONE) return;

        isPending.current = false;
        isDragging.current = true;
        startAnimationLoop();
      }

      e.preventDefault();

      // Update target only — the animation loop handles DOM writes
      targetPos.current = {
        x: startTranslate.current.x + dx,
        y: startTranslate.current.y + dy,
      };
    },
    [startAnimationLoop],
  );

  const handleMouseUp = useCallback(() => {
    const wasDragging = isDragging.current;

    isDragging.current = false;
    isPending.current = false;

    // Kill animation loop so it doesn't overwrite the reset below
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }

    if (!wasDragging) return;

    // Persist final position onto the main container
    const mainEl = getMainCont()?.current;
    if (mainEl) {
      const finalX = mainStartOffset.current.x + targetPos.current.x;
      const finalY = mainStartOffset.current.y + targetPos.current.y;
      mainEl.style.transform = `translate(${finalX}px, ${finalY}px)`;
    }

    // Hide & reset overlay
    if (overLaysContainer?.current) {
      overLaysContainer.current.style.opacity = "0";
      overLaysContainer.current.style.transform = `translate(0px, 0px)`;
    }

    // Clean slate for next drag
    currentPos.current = { ...ORIGIN };
    targetPos.current = { ...ORIGIN };
    startTranslate.current = { ...ORIGIN };
  }, [getMainCont, overLaysContainer]);

  /* ── Lifecycle ──────────────────────────────────────────── */
  useEffect(() => {
    const container = triggerContainer?.current;
    if (!container) return;

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [triggerContainer, handleMouseDown, handleMouseMove, handleMouseUp]);
}

export default useMove;
