import StartBtn from "./start/StartBtn";
import TaskBarApps from "./taskbar-apps/TaskBarApps";
import SystemTray from "./SystemTray";
import useStore from "@/zustand/store";

function Taskbar() {
  const openedApps = useStore((state) => state.apps);

  return (
    <footer className="bg-light-gray h-(--taskbar-height) w-full">
      <div className="relative flex size-full items-center after:absolute after:top-0.5 after:h-0.5 after:w-full after:bg-white">
        <div className="mt-1 flex h-[calc(var(--taskbar-height)-1rem)] w-full items-center justify-between gap-x-2 px-2">
          {/* START BTN */}
          <StartBtn />

          {/* OPENED APPLICATIONS */}
          {openedApps.length > 0 && <TaskBarApps openedApps={openedApps} />}

          {/* System Tray */}
          <SystemTray />
        </div>
      </div>
    </footer>
  );
}

export default Taskbar;
