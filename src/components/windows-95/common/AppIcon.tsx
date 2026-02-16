import { useRef, type RefObject } from "react";
import useStore from "@/zustand/store";

import type { App } from "@/types/app";

import { cn, getAssetsUrl } from "@/lib/utils";
import { getAppData } from "@/lib/windowUtils";
import useMove from "@/hooks/useMove";

interface IAppProps {
  app: App;
  className?: string;
}

function AppIcon({ app, className }: IAppProps) {
  const { name, iconPath } = app;

  const btnRef = useRef<HTMLButtonElement>(null);
  const btnOverlays = useRef<HTMLDivElement>(null);

  // useMove will handle the logic for moving the app icon around when the user clicks and drags it.
  useMove(btnOverlays as RefObject<HTMLElement>, btnRef as RefObject<HTMLElement>);

  const { toggleAppState, handleLaunchApp, apps } = useStore((state) => state);

  const launchApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.detail !== 2) return; // Only launch on double click

    // Check if app is already opened -- if yes, just toggle its state
    const currentApp = apps.find((a) => a.address === app.address);
    if (currentApp) {
      toggleAppState(currentApp.id);
      return;
    }

    // Launch new app with data from the AppIcon
    handleLaunchApp(
      getAppData(app, {
        height: window.innerHeight,
        width: window.innerWidth,
      }),
    );
  };

  return (
    <button
      ref={btnRef}
      title={name}
      onClick={launchApp}
      className={cn(
        "win95-icon group relative max-h-24 w-20 border-0 outline-none select-none focus:ring-0 focus:outline-none",
        className,
      )}
    >
      <div className="flex size-full flex-col items-center justify-start gap-y-2">
        <div className="win95-icon-checker size-8">
          <img
            src={getAssetsUrl(iconPath)}
            className="size-full object-fill select-none"
            draggable={"false"}
          />
        </div>
        <div className="group-focus:bg-navy-blue group-focus:border-yellow max-h-9 w-full overflow-hidden border-2 border-dashed border-transparent text-center leading-4.5 group-focus:text-white">
          <span className="font-ms-sans [display:-webkit-box] overflow-hidden text-sm leading-3.5 font-light wrap-break-word text-ellipsis text-white [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
            {name}
          </span>
        </div>
      </div>

      {/* OVERLAYS VERSION */}
      <div
        ref={btnOverlays}
        className="absolute inset-0 flex size-full flex-col items-center justify-start gap-y-2 opacity-0"
      >
        <div className="win95-icon-checker size-8">
          <img
            src={getAssetsUrl(iconPath)}
            className="size-full object-fill select-none"
            draggable={"false"}
          />
        </div>
        <div className="group-focus:bg-navy-blue group-focus:border-yellow max-h-9 w-full overflow-hidden border-2 border-dashed border-transparent text-center leading-4.5 group-focus:text-white">
          <span className="font-ms-sans [display:-webkit-box] overflow-hidden text-sm leading-3.5 font-light wrap-break-word text-ellipsis text-white [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
            {name}
          </span>
        </div>
      </div>
    </button>
  );
}

export default AppIcon;
