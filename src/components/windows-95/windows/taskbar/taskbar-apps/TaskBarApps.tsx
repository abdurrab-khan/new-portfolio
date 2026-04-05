import App from "./App";
import type { WindowContent } from "@/types/window";

interface ITraskBarAppsProps {
  openedApps: WindowContent[];
}

function TaskBarApps({ openedApps }: ITraskBarAppsProps) {
  return (
    <div className="size-full flex-1 overflow-auto px-0.5 py-0.75 lg:overflow-hidden">
      <div className="flex size-full items-center gap-x-3">
        {openedApps.map(({ id, state, titleBar }, idx) => (
          <App key={idx} id={id} state={state} iconPath={titleBar.iconPath} name={titleBar.title} />
        ))}
      </div>
    </div>
  );
}

export default TaskBarApps;
