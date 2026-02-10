import useStore from "@/zustand/store";
import Browser from "../../applications/Browser";
import FileExplorer from "../../applications/FileExplorer";

function OpenedApps() {
  const openedApps = useStore((state) => state.apps);

  return (
    <div className="pointer-events-none absolute inset-0 size-full">
      {openedApps
        .filter((app) => app.state === "open")
        .map((app) =>
          app.type === "file-explorer" ? (
            <FileExplorer key={app.id} app={app} />
          ) : (
            <Browser key={app.id} app={app} />
          ),
        )}
    </div>
  );
}

export default OpenedApps;
