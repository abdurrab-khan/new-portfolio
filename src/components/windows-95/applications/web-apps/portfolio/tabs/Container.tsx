import { cn } from "@/lib/utils";
import React from "react";

interface ITabContainerProps {
  title: string;
  style?: string;
  children: React.ReactNode;
}

export function TabContainer({ title, style, children }: ITabContainerProps) {
  return (
    <div className={cn("flex size-full flex-col gap-y-2", style)}>
      <span className="flex h-18 w-full items-center justify-center">
        <p
          className="bg-linear-to-b from-blue-700 to-green-400 bg-clip-text text-6xl font-bold tracking-widest text-transparent uppercase"
          style={{
            WebkitTextStroke: "2px #1e1b4b",
            filter: "drop-shadow(3px 3px 0px #1e1b4b)",
          }}
        >
          {title}
        </p>
      </span>
      <div className="border-b-dark-gray border-r-dark-gray mx-auto w-4/5 rounded-sm border-2 border-t-white border-l-white bg-[#c0c0c0] p-px">
        <div className="flex flex-col gap-0.5">
          <div className="h-px w-full bg-white opacity-90" />
          <div className="h-px w-full bg-[#808080]" />
        </div>
      </div>
      <div className="mt-2 h-fit min-h-76 w-full flex-1 p-4">{children}</div>
    </div>
  );
}

interface IWindowFrameProps {
  title: string;
  index?: number;
  showTitleBar?: boolean;
  children: React.ReactNode;
}

export function Frame({ title, index = -1, showTitleBar = true, children }: IWindowFrameProps) {
  return (
    <div className="flex size-full flex-col">
      <div className="border-b-dark-gray border-r-dark-gray size-full rounded-sm border-2 border-t-white border-l-white bg-[#c0c0c0] p-px">
        <div className="border-t-dark-gray border-l-dark-gray border-r-light-gray border-b-light-gray size-full rounded-sm border-2 bg-white">
          <div className="border-b-dark-gray flex items-center justify-between border-b-2 bg-linear-to-b from-[#000080] to-[#1e1b4b] px-2 py-1">
            <div className="between flex min-w-0 items-center gap-2">
              {showTitleBar && (
                <div className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#808080]" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#ffff00]" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#00aa00]" />
                </div>
              )}
              <span className="text-yellow truncate text-[11px] font-bold uppercase">{title}</span>
            </div>
            {index >= 0 && (
              <span className="text-yellow text-xs font-bold opacity-80">{index}</span>
            )}
          </div>
          <div className="size-full p-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
