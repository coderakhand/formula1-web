import { create } from "zustand";

interface storeType {
  selectedTab: string;
  setSelectedTab: (newSelectedTab: string) => void;
}

export const useStore = create<storeType>((set) => ({
  selectedTab: "home",
  setSelectedTab: (newSelectedTab: string) =>
    set({ selectedTab: newSelectedTab }),
}));
