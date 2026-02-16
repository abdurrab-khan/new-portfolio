import { create } from "zustand";
import type { WindowContent } from "@/types/window";

interface IStore {
  apps: WindowContent[];
}

interface IStoreActions {
  handleLaunchApp: (app: WindowContent) => void;
  handleCloseApp: (appId: string) => void;
  toggleAppState: (appId: string) => void;
  toggleAppSize: (appId: string) => void;
  updateAppState: (appId: string, update: Partial<WindowContent>) => void;
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
  toggleAppSize(appId) {
    set((prevState) => ({
      apps: prevState.apps.map((a) =>
        a.id === appId
          ? {
              ...a,
              state: a.state === "full" ? "open" : "full",
            }
          : a,
      ),
    }));
  },
}));

export default useStore;
