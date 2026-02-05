import useStore from "@/zustand/store";
import Button from "@/components/windows-95/common/Button";
import { getAssetsUrl } from "@/lib/utils";

interface IAppProps {
   id: string;
   name: string;
   iconPath: string;
   state: "open" | "minimized"; 
}

function App({id, name, iconPath, state}: IAppProps) {
    const toggleApp = useStore((state) => state.toggleAppState)
    
    return (
        <div className="h-full min-w-40">
            <Button 
                data-state={state}
                onClick={() => toggleApp(id)}
                state={state === "open" ? "active" : "default"}
                className={state === "open" ? "bg-checkerboard" : ""}
            >
                <div className="flex h-full items-center gap-x-0.5 p-1 font-semibold overflow-hidden">
                    <img src={getAssetsUrl(iconPath)} className="h-full" />
                    <span className="ml-1 font-ms-sans-bold truncate">{name}</span>
                </div>
            </Button>
        </div>
    );
};


export default App;