import { cn } from "../lib/utils";
import { Activity, useEffect, useMemo, useRef, useState } from "react";

type Phase = "loading" | "fading" | "done";

function randInt(min: number, max: number) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

export default function Loading() {
  const fadeMs = 240;
  const resourcesTotal = 19;

  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");

  const startedAtRef = useRef<number | null>(null);

  const initialLoaded = useMemo(() => randInt(4, 8), []);
  const durationMs = useMemo(() => randInt(2800, 4200), []);

  useEffect(() => {
    let rafId = 0;
    let alive = true;
    let hasStartedFade = false;

    const start = () => {
      startedAtRef.current = performance.now();

      const tick = (now: number) => {
        if (!alive) return;

        if (hasStartedFade) {
          setProgress(1);
          return;
        }

        const t = startedAtRef.current ? (now - startedAtRef.current) / durationMs : 0;
        const clamped = Math.max(0, Math.min(1, t));

        // Ease-out so it sits near 90% for a moment like legacy boot screens.
        const eased = 1 - Math.pow(1 - clamped, 3);
        setProgress(eased);

        if (clamped < 1) rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);
    };

    start();

    const t1 = window.setTimeout(() => {
      hasStartedFade = true;
      setPhase("fading");
    }, durationMs);
    const t2 = window.setTimeout(() => {
      setPhase("done");
    }, durationMs + fadeMs);

    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [durationMs, fadeMs]);

  const isVisible = phase !== "done";
  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-9999 flex items-start justify-center overflow-auto bg-[#0a0f3a] select-none",
        phase === "fading" ? "opacity-0 transition-opacity duration-200" : "",
      )}
      style={{
        fontFamily: '"Courier New", Courier, monospace',
      }}
    >
      <CRTBackground />
      <div className="relative flex min-h-full w-full max-w-280 flex-col px-4 py-6 font-normal text-white sm:px-6 sm:py-8 md:px-10 md:py-11">
        <TopBootText />
        <LoadingContainer
          progress={progress}
          initialLoaded={initialLoaded}
          resourcesTotal={resourcesTotal}
        />
        {/* Bottom “press key” hint */}
        <Activity mode={progress > 0.92 ? "visible" : "hidden"}>
          <div className="mt-auto pb-1 text-[12px] opacity-90">
            Press <span className="font-bold">DEL</span> to enter SETUP,{" "}
            <span className="font-bold">Esc</span> to skip memory test
          </div>
        </Activity>
      </div>
    </div>
  );
}

const logPool = [
  "Loaded KeyboardKeydown1",
  "Loaded mouseUp",
  "Loaded keyboardKeydown4",
  "Loaded ccType",
  "Loaded ccSubmit",
  "Loaded startup",
  "Loaded keyboardKeydown5",
  "Loaded mouseUp",
  "Loaded keyboardKeydown6",
  "Loaded ccType",
];

const CRTBackground = () => {
  return (
    <>
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(circle at 60% 20%, rgba(130, 90, 255, 0.35) 0%, rgba(10, 15, 58, 0) 55%),
            repeating-linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 3px, rgba(0,0,0,0) 4px)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 100%)",
        }}
      />
    </>
  );
};

const TopBootText = () => {
  return (
    <div className="text-[12px] leading-5 opacity-95 sm:text-[13px] sm:leading-6 md:text-[14px]">
      <div>Abdur Rab Khan,</div>
      <div>Abdur Rab.</div>
      <div className="mt-1 text-[12px] opacity-80">Released: 20/05/2026</div>
      <div className="text-[12px] opacity-80">ABRIDS 0202 Abdur Rab In.,</div>
      <div className="mt-1 text-[12px] opacity-90">AKR 413 2002-2026 Special UK123</div>
      <div className="mt-2 opacity-90">
        AKR Showcase* XX 778
        <br />
        Checking RAM : 12M00 OK
      </div>
    </div>
  );
};

const LoadingContainer = ({
  progress,
  initialLoaded,
  resourcesTotal,
}: {
  progress: number;
  initialLoaded: number;
  resourcesTotal: number;
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [rowStep, setRowStep] = useState(40);

  const loadedNow = Math.min(
    resourcesTotal,
    Math.max(0, Math.round(initialLoaded + (resourcesTotal - initialLoaded) * progress)),
  );

  useEffect(() => {
    const updateRowStep = () => {
      const listEl = listRef.current;
      if (!listEl) return;

      const firstRow = listEl.firstElementChild as HTMLElement | null;
      if (!firstRow) return;

      const styles = window.getComputedStyle(listEl);
      const gapY = Number.parseFloat(styles.rowGap || styles.gap || "0") || 0;
      const nextRowStep = firstRow.getBoundingClientRect().height + gapY;

      if (nextRowStep > 0) {
        setRowStep(nextRowStep);
      }
    };

    updateRowStep();
    window.addEventListener("resize", updateRowStep);

    return () => {
      window.removeEventListener("resize", updateRowStep);
    };
  }, []);

  return (
    <div className="mt-8 grid w-full grid-cols-1 items-center gap-8 md:mt-12 md:gap-12">
      {/* Left boot log */}
      <div className="text-[12px] leading-5 opacity-95 sm:text-[13px] sm:leading-6 md:text-[14px]">
        <div className="mb-4">
          LOADING RESOURCES ({loadedNow}/{resourcesTotal}) ...
        </div>

        {/* LOADING */}
        <div className="ml-0 flex h-52.5 flex-col gap-y-2 overflow-hidden sm:h-64 md:ml-8 md:h-70">
          <div
            ref={listRef}
            className="flex flex-col gap-y-2 transition-transform duration-150"
            style={{
              transform: `translateY(${Math.max(0, Number((progress * 10).toFixed()) - 7) * -rowStep}px)`,
            }}
          >
            {logPool.map((line, idx) => (
              <LoadingResources key={idx} idx={idx} progress={progress} line={line} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LoadingResources = ({
  idx,
  progress,
  line,
}: {
  idx: number;
  progress: number;
  line: string;
}) => {
  const rangeStart = idx * 10;
  const rangeEnd = rangeStart + 10;
  const progressPercent = Math.floor(progress * 100);
  const isInRange = progressPercent >= rangeStart && progressPercent <= rangeEnd;
  const rangeProgress = isInRange
    ? progressPercent - rangeStart
    : progressPercent > rangeEnd
      ? 10
      : 0;
  const filledBoxes = Math.ceil(rangeProgress / (10 / 6));

  return (
    <div key={idx} className="flex items-center gap-2 sm:gap-3">
      <div className="flex w-full min-w-0 items-center justify-between gap-2 sm:gap-3">
        <p className="truncate pr-1 text-[12px] leading-5 opacity-95 sm:text-[13px] sm:leading-6 md:text-[14px]">
          {line}
        </p>
        <div
          className="grid h-7 w-[min(14.625rem,56vw)] shrink-0 grid-cols-6 gap-x-1 bg-white px-1 py-0.5 shadow sm:h-8 sm:w-58.5 sm:gap-x-1.5 sm:px-1.5 sm:py-0.75"
          style={{
            boxShadow: "inset 0px 0px 6px #000000b5",
          }}
        >
          {Array.from({ length: 6 }).map((_, boxIdx) => (
            <div
              key={boxIdx}
              className={`size-full border border-black/20 ${
                boxIdx < filledBoxes ? "bg-blue-900" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-md min-w-10 text-right font-bold">
        {Math.max(0, Math.min(100, rangeProgress * 10))}%
      </p>
    </div>
  );
};
