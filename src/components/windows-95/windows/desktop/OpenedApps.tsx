import useStore from "@/zustand/store";
import Browser from "../../applications/Browser";
import FileExplorer from "../../applications/FileExplorer";
import type { WindowContent } from "@/types/window";
import Alert from "../../common/Alert";

function OpenedApps() {
  const openedApps = useStore((state) => state.apps);
  const visibleApps = [...openedApps]
    .filter((app) => app.state !== "minimized")
    .sort((a, b) => (a.zIndex ?? 0) - (b.zIndex ?? 0));

  return (
    <div className="pointer-events-none absolute inset-0 size-full">
      {visibleApps.map((app) => (
        <App key={app.id} app={app} />
      ))}
    </div>
  );
}

const App = ({ app }: { app: WindowContent }) => {
  const handleCloseApp = useStore((state) => state.handleCloseApp);

  const onClose = () => {
    handleCloseApp(app.id);
  };

  switch (app.type) {
    case "file-explorer":
      return <FileExplorer app={app} />;
    case "browser":
      return <Browser app={app} />;
    default:
      return (
        <Alert
          title="App Not Found"
          message={`The application of type "${app.type}" is not found.`}
          onClose={onClose}
        />
      );
  }
};

export default OpenedApps;
