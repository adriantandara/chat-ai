import { Sections } from "../types";
import { create } from "zustand";

interface SectionsStore {
  section: Sections | null;
  setSection: (section: Sections) => void;
}

export const useSectionStore = create<SectionsStore>((set) => ({
  section: "Chats",
  setSection: (section) => set(() => ({ section })),
}));
