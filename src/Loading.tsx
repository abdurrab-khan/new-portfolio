import { useEffect, useMemo, useRef, useState } from "react";

type Phase = "loading" | "fading" | "done";

function randInt(min: number, max: number) {
  return Math.floor(min + Math.random() * (max - min + 1));
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

export default function Loading() {
  const bootKey = "portfolio_boot_complete_v1";
  const durationMs = useMemo(() => randInt(2800, 4200), []);
  const fadeMs = 240;
  const [phase, setPhase] = useState<Phase>("loading");
  const [progress, setProgress] = useState(0);
  const startedAtRef = useRef<number | null>(null);

  const initialLoaded = useMemo(() => randInt(4, 8), []);
  const resourcesTotal = 19;

  useEffect(() => {
    if (phase === "done") return;

    let rafId = 0;
    let alive = true;

    const start = () => {
      startedAtRef.current = performance.now();
      const tick = (now: number) => {
        if (!alive) return;
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

    const t1 = window.setTimeout(() => setPhase("fading"), durationMs);
    const t2 = window.setTimeout(() => {
      try {
        sessionStorage.setItem(bootKey, "1");
      } catch {
        // ignore
      }
      setPhase("done");
    }, durationMs + fadeMs);

    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [durationMs, phase]);

  const isVisible = true;
  if (!isVisible) return null;

  const loadedNow = Math.min(
    resourcesTotal,
    Math.max(0, Math.round(initialLoaded + (resourcesTotal - initialLoaded) * progress)),
  );

  return (
    <div
      className={[
        "fixed inset-0 z-9999 select-none",
        phase === "fading" ? "opacity-0 transition-opacity duration-200" : "",
        "flex items-start justify-center overflow-hidden",
      ].join(" ")}
      style={{
        background: "#0a0f3a",
      }}
    >
      {/* CRT background effects */}
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

      <div
        className="relative flex h-full w-full max-w-280 flex-col px-10 py-11 text-white"
        style={{
          fontFamily: '"Courier New", Courier, monospace',
        }}
      >
        {/* Top-left boot text */}
        <div className="text-[14px] leading-6 opacity-95">
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

        {/* Main loading area */}
        <div className="mt-12 grid w-full grid-cols-[minmax(420px,1fr)_auto] items-center gap-16">
          {/* Left boot log */}
          <div className="text-[14px] leading-6 opacity-95">
            <div className="mb-4">
              LOADING RESOURCES ({loadedNow}/{resourcesTotal}) ...
            </div>

            {/* LOADING */}
            <div className="ml-8 flex h-70 flex-col gap-y-2 overflow-hidden">
              <div
                className="flex flex-col gap-y-2 transition-transform duration-300"
                style={{
                  transform: `translateY(${Math.max(0, Number((progress * 10).toFixed()) - 7) * -40}px)`,
                }}
              >
                {logPool.map((line, idx) => {
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
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex w-full items-center justify-between">
                        <p className="text-[14px] leading-6 opacity-95">{line}</p>
                        <div
                          className="grid h-8 w-58.5 gap-x-1.5 bg-white px-1.5 py-0.75 shadow"
                          style={{
                            gridTemplateColumns: "repeat(6, 32px)",
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
                      <p className="text-md min-w-10 font-bold">
                        {Math.max(0, Math.min(100, rangeProgress * 10))}%
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom “press key” hint */}
        {progress > 0.92 && (
          <div className="mt-auto pb-1 text-[12px] opacity-90">
            Press <span className="font-bold">DEL</span> to enter SETUP,{" "}
            <span className="font-bold">Esc</span> to skip memory test
          </div>
        )}
      </div>
    </div>
  );
}
