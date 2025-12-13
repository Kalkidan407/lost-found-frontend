"use client";


import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Item = {
  id: number;
  name: string;
  description?: string;
  categoryId?: number | null;
  locationId?: number | null;
  photoUrl?: string | null;
  status?: boolean;
  createdAt?: string;
};

type ItemState = {
  items: Item[];
  loading: boolean;
  filterCategoryId: number | null;
  setItems: (items: Item[]) => void;
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
  setFilterCategoryId: (id: number | null) => void;
};

export const useItemStore = create<ItemState>()(
  devtools((set, get) => ({
    items: [],
    loading: false,
    filterCategoryId: null,

    setItems: (items) => set({ items }),
    addItem: (item) => set({ items: [...get().items, item] }),
    removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
    setFilterCategoryId: (id) => set({ filterCategoryId: id }),
  }))
);
