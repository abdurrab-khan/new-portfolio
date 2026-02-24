import React from "react";
import { cn } from "@/lib/utils";

interface BorderContainerProps {
  children: React.ReactNode;
  className?: string;
}

// Unique filter ID to avoid collisions if component is used multiple times
const FILTER_ID = "border-container-distortion";

function BorderContainer({ children, className }: BorderContainerProps) {
  return (
    <div className={cn("relative p-1.5", className)}>
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id={FILTER_ID} x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="50"
              seed="8"
              result="noise"
            />
            {/* Blur the noise map first so the displacement is soft, not sharp */}
            <feGaussianBlur in="noise" stdDeviation="0.5" result="smoothNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="smoothNoise"
              scale="1.2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div
        className="pointer-events-none absolute inset-0 rounded-xl border-6 border-purple-200 bg-purple-200"
        style={{ filter: `url(#${FILTER_ID})` }}
      />
      <div className="relative z-10 h-full w-full rounded-lg border-2 border-t-purple-800 border-r-purple-300 border-b-purple-300 border-l-purple-800 bg-white p-4">
        {children}
      </div>
    </div>
  );
}

export default BorderContainer;
