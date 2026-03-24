import useStore from "@/zustand/store";
import Browser from "../../applications/Browser";
import FileExplorer from "../../applications/FileExplorer";
import type { WindowContent } from "@/types/window";

const isFileExplorer = (app: WindowContent): app is WindowContent<"file-explorer"> =>
  app.type === "file-explorer";

function OpenedApps() {
  const openedApps = useStore((state) => state.apps);
  const visibleApps = [...openedApps]
    .filter((app) => app.state !== "minimized")
    .sort((a, b) => (a.zIndex ?? 0) - (b.zIndex ?? 0));

  return (
    <div className="pointer-events-none absolute inset-0 size-full">
      {visibleApps.map((app) =>
        isFileExplorer(app) ? (
          <FileExplorer key={app.id} app={app} />
        ) : (
          <Browser key={app.id} app={app as WindowContent<"browser">} />
        ),
      )}
    </div>
  );
}

export default OpenedApps;
