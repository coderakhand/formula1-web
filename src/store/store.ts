import { create } from "zustand";

interface storeType {
  selectedTab: string | null;
  setSelectedTab: (newSelectedTab: string | null) => void;
}

export const useStore = create<storeType>((set) => ({
  selectedTab: null,
  setSelectedTab: (newSelectedTab: string | null) =>
    set({ selectedTab: newSelectedTab }),
}));
