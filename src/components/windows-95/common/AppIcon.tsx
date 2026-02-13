import { cn, getAssetsUrl } from "@/lib/utils";

import useStore from "@/zustand/store";
import type { App } from "@/types/app";
import type { WindowContent } from "@/types/window";

interface IAppProps {
  app: App;
  className?: string;
  onUpdate: React.Dispatch<React.SetStateAction<App[]>>;
}

function AppIcon({ app, onUpdate, className }: IAppProps) {
  const { name, iconPath, position } = app;
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
      title={name}
      onClick={launchApp}
      style={{
        ...(position && { transform: `translate(${position.x}, ${position.y})` }),
      }}
      className={cn(
        "win95-icon group flex max-w-20 flex-col items-center justify-start gap-y-2 border-0 outline-none select-none focus:ring-0 focus:outline-none",
        className,
      )}
    >
      <div className="win95-icon-checker h-8 w-8">
        <img src={getAssetsUrl(iconPath)} className="size-full object-fill" />
      </div>
      <div className="border-yellow group-focus:bg-navy-blue max-h-9 w-full overflow-hidden text-center leading-4.5 group-focus:border-2 group-focus:border-dashed group-focus:text-white">
        <span className="font-ms-sans [display:-webkit-box] overflow-hidden text-sm font-light wrap-break-word text-ellipsis text-white [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {name}
        </span>
      </div>
    </button>
  );
}

// Helper function to convert App data to WindowContent data when launching an app
const getAppData = (app: App, screenSize: { height: number; width: number }) => {
  const { name, type, address, iconPath } = app;

  // Determine the app type based on the icon type
  const appType =
    type === "folder"
      ? "file-explorer"
      : type === "image"
        ? "image-viewer"
        : type === "text"
          ? "text-editor"
          : "browser";

  const getRandomSize = (screenSize: number, maxSizePercentage: number) => {
    const maxSize = (screenSize * maxSizePercentage) / 100;

    // Return a random size between 50% and the maxSize percentage of the screen
    return Math.floor(Math.random() * (maxSize - maxSize / 2)) + maxSize / 2;
  };

  // Create the window data based on the app data
  const windowData: WindowContent = {
    id: `${Date.now()}_${name.replace(" ", "").toLowerCase()}`,
    state: "open",
    type: appType,
    address,
    titleBar: {
      title: name,
      iconPath,
    },
    position: {
      x: Math.floor(Math.random() * (screenSize.width - 400)), // Random x position within screen width
      y: Math.floor(Math.random() * (screenSize.height - 300)), // Random y position within screen height
    },
    size: {
      height: getRandomSize(screenSize.height, 50), // Random height up to 50% of the screen
      width: getRandomSize(screenSize.width, 50), // Random width up to 50% of the screen
    },
  };

  return windowData;
};

export default AppIcon;
