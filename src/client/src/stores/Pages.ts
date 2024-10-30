import { create } from "zustand";
import { Pages } from "../types";

interface PagesStore {
  page: Pages | null;
  setPages: (pages: Pages) => void;
}

export const usePagesStore = create<PagesStore>((set) => ({
  page: null,
  setPages: (page) => set(() => ({ page })),
}));
