import { create } from "zustand";

interface IStore {
  count: number;
}

interface IStoreActions {
  increment: () => void;
  decrement: () => void;
}

const useStore = create<IStore & IStoreActions>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
