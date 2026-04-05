import { create } from "zustand";
import type { WindowContent } from "@/types/window";

const getMaxZIndex = (apps: WindowContent[]) =>
  apps.reduce((max, app) => Math.max(max, app.zIndex ?? 0), 0);

interface IStore {
  apps: WindowContent[];
  isShutdown: boolean;
}

interface IStoreActions {
  toggleShutdown: () => void;
  handleLaunchApp: (app: WindowContent) => void;
  handleCloseApp: (appId: string) => void;
  bringToFront: (appId: string) => void;
  toggleAppState: (appId: string) => void;
  toggleAppSize: (appId: string) => void;
  updateAppState: (appId: string, update: Partial<WindowContent>) => void;
}

const useStore = create<IStore & IStoreActions>((set) => ({
  apps: [],
  isShutdown: false,
  toggleShutdown() {
    set((prevState) => ({
      ...prevState,
      isShutdown: !prevState.isShutdown,
    }));
  },
  handleLaunchApp(app) {
    set((prevState) => ({
      apps: [
        ...prevState.apps,
        {
          ...app,
          zIndex: getMaxZIndex(prevState.apps) + 1,
        },
      ],
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
              ...update,
            }
          : a,
      ),
    }));
  },
  bringToFront(appId) {
    set((prevState) => {
      const topZIndex = getMaxZIndex(prevState.apps);
      const targetApp = prevState.apps.find((a) => a.id === appId);

      if (!targetApp || targetApp.zIndex === topZIndex) return prevState;

      return {
        apps: prevState.apps.map((a) =>
          a.id === appId
            ? {
                ...a,
                zIndex: topZIndex + 1,
              }
            : a,
        ),
      };
    });
  },
  toggleAppState(appId) {
    set((prevState) => {
      const topZIndex = getMaxZIndex(prevState.apps);

      return {
        apps: prevState.apps.map((a) => {
          if (a.id !== appId) return a;

          const isRestoring = a.state === "minimized";

          return {
            ...a,
            state: isRestoring ? "open" : "minimized",
            ...(isRestoring ? { zIndex: topZIndex + 1 } : {}),
          };
        }),
      };
    });
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
