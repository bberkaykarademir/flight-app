import { create } from "zustand";

export interface Filters {
  departureCity: string;
  arrivalCity: string;
  fromDateTime: string;
  toDateTime: string;
  roundTrip: string;
  airline: string;
  stops: string;
  sort: string;
  arrivalAmPm: string;
}

export interface FiltersState {
  filters: Filters;
  setFilters: (filters: Partial<Filters>) => void;
  resetFilters: () => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  filters: {
    sort: "lowestPrice",
    departureCity: "",
    arrivalCity: "",
    fromDateTime: "",
    toDateTime: "",
    roundTrip: "",
    airline: "",
    stops: "",
    arrivalAmPm: "",
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
        sort: "lowestPrice",
        departureCity: "",
        arrivalCity: "",
        fromDateTime: "",
        toDateTime: "",
        roundTrip: "",
        airline: "",
        stops: "",
        arrivalAmPm: "",
      },
    })),
}));
