import { getAssetsUrl } from "@/lib/utils";

import useStore from "@/zustand/store";
import type { AppType } from "@/types/app";
import type { Browser, FileExplorer } from "@/types/window";

function AppIcon({
  name,
  position,
  address,
  iconPath,
  setAppUpdate,
}: AppType & { setAppUpdate: React.Dispatch<React.SetStateAction<AppType[]>> }) {
  const handleLaunchApp = useStore((state) => state.handleLaunchApp);

  const launchApp = () => {
    // Building data's required during launching an app
    const appData: Browser | FileExplorer = {
      id: `${Date.now()}_${name.replace(" ", "").toLowerCase()}`,
      address,
      state: "open",
      titleBar: {
        title: name,
        iconPath: iconPath,
      },
      position: {
        x: 0,
        y: 0,
      },
      size: {
        height: 200,
        width: 500,
      },
    };

    // Updating the state for launching it.
    handleLaunchApp(appData);
  };

  return (
    <button
      title={name}
      onClick={launchApp}
      style={{
        ...(position && { transform: `translate(${position.x}, ${position.y})` }),
      }}
      className="win95-icon group flex max-w-20 flex-col items-center justify-start gap-y-2 border-0 outline-none select-none focus:ring-0 focus:outline-none"
    >
      <div className="win95-icon-checker h-8 w-8">
        <img src={getAssetsUrl(iconPath)} className="size-full object-fill" />
      </div>
      <div className="border-yellow group-focus:bg-navy-blue max-h-[36px] w-full overflow-hidden text-center leading-[18px] group-focus:border-2 group-focus:border-dashed group-focus:text-white">
        <span className="font-ms-sans [display:-webkit-box] overflow-hidden wrap-break-word text-ellipsis [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {name}
        </span>
      </div>
    </button>
  );
}

export default AppIcon;
