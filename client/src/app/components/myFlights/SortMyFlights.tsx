import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const SortMyFlights = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <span>Sort by:</span>
        <select className="font-bold p-1 rounded bg-transparent inputWrapper-focus">
          <option>Recommended</option>
          <option>Newest Flights</option>
          <option>Oldest Flights</option>
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
