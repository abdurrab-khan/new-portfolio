import { useEffect } from "react";
import Activity from "./Activity.tsx";
import Loading from "./components/Loading.tsx";
import Windows from "./components/windows-95/Windows";
import useStore from "./zustand/store.ts";

function App() {
  const launchApplication = useStore((s) => s.handleLaunchApp);

  useEffect(() => {
    const handleLoad = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const width = windowWidth * 0.8;
      const height = windowHeight * 0.75;

      const launchData = {
        id: Date.now().toString() + "_aboutme",
        zIndex: 1,
        state: "open" as const,
        type: "browser" as const,
        address: "C:\\Windows\\Desktop\\About Me",
        titleBar: {
          title: "About Me",
          iconPath: "/icons/explorer.png",
        },
        size: {
          width: width,
          height: height,
        },
        position: {
          x: windowWidth / 2 - width / 2,
          y: windowHeight / 2 - height / 2 - 48,
        },
      };

      launchApplication(launchData);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [launchApplication]);

  return (
    <main className="scroll-none relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#008083]">
      <Activity>
        <div className="size-full">
          <Windows />
        </div>
      </Activity>
      <Loading />
    </main>
  );
}

export default App;
