import useStore from "@/zustand/store";
import Window from "../../layout/Window";

function OpenedApps() {
  const openedApps = useStore((state) => state.apps);

  return (
    <div className="pointer-events-none absolute inset-0 size-full">
      {openedApps
        .filter((app) => app.state === "open")
        .map((app) => (
          <Window key={app.id} app={app}>
            <></>
          </Window>
        ))}
    </div>
  );
}

export default OpenedApps;
