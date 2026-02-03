import { create } from "zustand";
import type { Browser, FileExplorer } from "@/types/window";

interface IStore {
  apps: Array<Browser | FileExplorer>;
}

interface IStoreActions {
  handleLaunchApp: (app: Browser | FileExplorer) => void;
  handleCloseApp: (appId: string) => void;
  toggleAppState: (appId: string) => void;
  updateAppState: (appId: string, update: Partial<Browser | FileExplorer>) => void;
}

const useStore = create<IStore & IStoreActions>((set) => ({
  apps: [],
  handleLaunchApp(app) {
    set((prevState) => ({
      apps: [...prevState.apps, app],
    }));
  },
  handleCloseApp(appId) {
    set((prevState) => ({
      apps: prevState.apps.filter((a) => a.id !== appId),
    }));
  },
  updateAppState(appId, update) {
    set((prevState) => ({
      apps: prevState.apps.map((a) =>
        a.id === appId
          ? {
              ...a,
              update,
            }
          : a,
      ),
    }));
  },
  toggleAppState(appId) {
    set((prevState) => ({
      apps: prevState.apps.map((a) =>
        a.id === appId
          ? {
              ...a,
              state: a.state === "open" ? "minimized" : "open",
            }
          : a,
      ),
    }));
  },
}));

export default useStore;
