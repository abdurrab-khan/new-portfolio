import useStore from "@/zustand/store";
import App from "./App";

function TaskBarApps() {
  const openedApps = useStore((state) => state.apps);
  
  return (
    <div className="size-full flex-1 px-0.5 py-0.75 overflow-hidden">
      <div className="flex size-full gap-x-3">
        {
          openedApps.map(({id, state, titleBar}, idx) => 
            <App 
              key={idx} 
              id={id} 
              state={state} 
              iconPath={titleBar.iconPath} 
              name={titleBar.title} 
            />
        )}
      </div>
    </div>
  );
}

export default TaskBarApps;
