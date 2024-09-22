"use client";
import { useFiltersStore } from "@/app/state/filtersStore";
import React from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";

const SearchFlight = () => {
  const setFilters = useFiltersStore((state) => state.setFilters);

  return (
    <section className="flex flex-col gap-5 bg-background-light p-6 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoAirplaneSharp fill="#333333" className="w-5 h-5" />
          <h2 className="text-lg font-bold">BOOK YOUR FLIGHT</h2>
        </div>
        <div className="flex gap-[2px] text-sm">
          <button className="bg-primary font-semibold text-text-inverse px-4 py-3 rounded-l-full">
            Round trip
          </button>
          <button className="bg-primary-light font-semibold text-primary px-4 py-3 rounded-r-full">
            One way
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex gap-1 flex-1">
          <div className="inputWrapper inputWrapper-focus flex items-center pl-3 pr-1 gap-2 flex-1 border-2 border-[#dcdcdc] rounded-l-full">
            <FaPlaneDeparture fill="#501a93" className="w-5 h-5" />
            <input type="text" className="w-full h-full py-2" />
          </div>
          <div className="inputWrapper inputWrapper-focus flex items-center pl-3 pr-1 gap-2 flex-1 border-2 border-[#dcdcdc] rounded-r-full">
            <FaPlaneArrival fill="#501a93" className="w-5 h-5" />
            <input type="text" className="w-full h-full py-2" />
          </div>
        </div>
        <div className="flex gap-1 flex-1">
          <div className="inputWrapper inputWrapper-focus flex-1 border-2 border-[#dcdcdc] rounded-l-full">
            <input type="text" className="w-full h-full px-[10px] py-2" />
          </div>
          <div className="inputWrapper inputWrapper-focus flex-1 border-2 border-[#dcdcdc] rounded-r-full">
            <input type="text" className="w-full h-full px-[10px] py-2" />
          </div>
        </div>
      </div>
      <button
        onClick={() => setFilters({ roundTrip: "Round Trip" })}
        className="w-fit bg-primary text-text-inverse font-semibold px-4 py-[10px] rounded-md"
      >
        Show flights
      </button>
    </section>
  );
};

export default SearchFlight;
