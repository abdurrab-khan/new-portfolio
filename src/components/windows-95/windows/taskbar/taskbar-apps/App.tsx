import useStore from "@/zustand/store";
import Button from "@/components/windows-95/common/Button";
import { getAssetsUrl } from "@/lib/utils";

interface IAppProps {
  id: string;
  name: string;
  iconPath: string;
  state: "open" | "minimized" | "full";
}

function App({ id, name, iconPath, state }: IAppProps) {
  const toggleApp = useStore((state) => state.toggleAppState);

  return (
    <div className="h-full min-w-40">
      <Button
        data-state={state}
        onClick={() => toggleApp(id)}
        state={state === "open" ? "active" : "default"}
        className={state === "open" ? "bg-checkerboard" : ""}
      >
        <div className="flex h-full items-center gap-x-0.5 overflow-hidden p-1 font-semibold">
          <img src={getAssetsUrl(iconPath)} className="h-full" />
          <span className="font-ms-sans-bold ml-1 truncate">{name}</span>
        </div>
      </Button>
    </div>
  );
}

export default App;
