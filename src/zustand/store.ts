import { create } from "zustand";
import type { Browser, FileExplorer } from "@/types/window";

interface IStore {
  apps: Array<Browser | FileExplorer>;
}

interface IStoreActions {
  // increment: () => void;
  // decrement: () => void;
}

const useStore = create<IStore & IStoreActions>((set) => ({
  apps: []
}));

export default useStore;
