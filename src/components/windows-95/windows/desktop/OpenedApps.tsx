import { lazy, Suspense } from "react";
import useStore from "@/zustand/store";
import Alert from "../../common/Alert";
import type { WindowContent } from "@/types/window";

function OpenedApps() {
  const openedApps = useStore((state) => state.apps);
  const visibleApps = [...openedApps]
    .filter((app) => app.state !== "minimized")
    .sort((a, b) => (a.zIndex ?? 0) - (b.zIndex ?? 0));

  return (
    <section className="pointer-events-none absolute inset-0 size-full overflow-auto">
      {visibleApps.map((app) => (
        <App key={app.id} app={app} />
      ))}
    </section>
  );
}

const Browser = lazy(() => import("../../applications/Browser"));
const FileExplorer = lazy(() => import("../../applications/FileExplorer"));

const App = ({ app }: { app: WindowContent }) => {
  const handleCloseApp = useStore((state) => state.handleCloseApp);

  const onClose = () => {
    handleCloseApp(app.id);
  };

  let component = null;

  switch (app.type) {
    case "file-explorer":
      component = <FileExplorer app={app} />;
      break;
    case "browser":
      component = <Browser app={app} />;
      break;
    default:
      component = (
        <Alert
          title="App Not Found"
          message={`The application of type "${app.type}" is not found.`}
          onClose={onClose}
        />
      );
  }

  return <Suspense fallback={null}>{component}</Suspense>;
};

export default OpenedApps;
