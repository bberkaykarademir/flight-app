import { create } from "zustand";

export interface MyFlightFilters {
  sort: string;
}

export interface MyFlightFiltersState {
  filters: MyFlightFilters;
  setFilters: (filters: Partial<MyFlightFilters>) => void;
  resetFilters: () => void;
}

export const useMyFlightsStore = create<MyFlightFiltersState>((set) => ({
  filters: {
    sort: "earliest",
  },
  setFilters: (updatedFilters) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ...updatedFilters,
      },
    })),
  resetFilters: () =>
    set(() => ({
      filters: {
        sort: "earliest",
      },
    })),
}));
