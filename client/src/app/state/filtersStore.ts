import { create } from "zustand";

export interface Filters {
  departureCity: string;
  arrivalCity: string;
  departureDateTime: string;
  arrivalDateTime: string;
  roundTrip: string;
  airline: string;
  stops: string;
}

export interface FiltersState {
  filters: Filters;
  setFilters: (filters: Partial<Filters>) => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  filters: {
    sort: "lowestPrice",
    departureCity: "",
    arrivalCity: "",
    departureDateTime: "",
    arrivalDateTime: "",
    roundTrip: "",
    airline: "",
    stops: "",
  },
  setFilters: (updatedFilters) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ...updatedFilters,
      },
    })),
}));
