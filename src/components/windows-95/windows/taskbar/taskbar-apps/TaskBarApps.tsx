import App from "./App";
import useAppStateManager from "@/hooks/useAppStateManager";
import type { Browser, FileExplorer } from "@/types/window";

interface ITraskBarAppsProps {
  openedApps: (Browser | FileExplorer)[];
}

function TaskBarApps({ openedApps }: ITraskBarAppsProps) {
  useAppStateManager();

  return (
    <div className="size-full flex-1 overflow-hidden px-0.5 py-0.75">
      <div className="flex size-full gap-x-3">
        {openedApps.map(({ id, state, titleBar }, idx) => (
          <App key={idx} id={id} state={state} iconPath={titleBar.iconPath} name={titleBar.title} />
        ))}
      </div>
    </div>
  );
}

export default TaskBarApps;
