"use client";
import { useMyFlightsStore } from "@/app/state/myFlightsStore";
import React, { useEffect, useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const SortMyFlights = () => {
  const setFilters = useMyFlightsStore((state) => state.setFilters);

  const [sort, setSort] = useState("earliest");

  const updateFilters = () => {
    setFilters({
      sort,
    });
  };

  useEffect(() => {
    updateFilters();
  }, [sort]);

  return (
    <section className="flex items-center justify-between text-sm md:text-base">
      <div className="flex items-center gap-1">
        <span>Sort by:</span>
        <select
          className="font-bold p-1 rounded bg-transparent inputWrapper-focus"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="earliest">Earliest Flights</option>
          <option value="latest">Latest Flights</option>
        </select>
      </div>
      <div className="flex gap-2 items-center">
        <RiErrorWarningLine fill="#5493f7" className="w-5 h-5" />
        <div className="flex gap-1 items-center">
          <span>Avg Fare:</span>
          <span className="font-bold">$225</span>
        </div>
      </div>
    </section>
  );
};

export default SortMyFlights;
