"use client";
import { useFiltersStore } from "@/app/state/filtersStore";
import React, { useEffect, useState } from "react";

const FilterFlightList = () => {
  const setFilters = useFiltersStore((state) => state.setFilters);
  const airlines = [
    "American Airlines",
    "British Airways",
    "Air France",
    "KLM",
    "Emirates",
    "Qatar Airways",
    "Lufthansa",
    "Singapore Airlines",
    "Qantas",
    "Cathay Pacific",
  ];

  const sortOptions = [
    { name: "Lowest Price", value: "lowestPrice" },
    { name: "Highest Price", value: "highestPrice" },
    { name: "Earliest Departure", value: "+scheduleTime" },
    { name: "Latest Departure", value: "-scheduleTime" },
  ];

  const [sort, setSort] = useState("lowestPrice");
  const [arrivalAmPm, setArrivalAmPm] = useState("");
  const [stops, setStops] = useState("");
  const [airline, setAirline] = useState("");

  const updateFilters = () => {
    setFilters({
      sort,
      arrivalAmPm,
      stops,
      airline,
    });
  };

  useEffect(() => {
    updateFilters();
    console.log("Filters updated");
  }, [sort, arrivalAmPm, stops, airline]);

  return (
    <section className="flex flex-col sm:flex-row lg:overflow-y-auto justify-center sm:justify-between lg:justify-start lg:flex-col gap-4 sm:gap-6 pt-2 text-xs md:text-sm overflow-hidden">
      <div className="flex items-center sm:items-stretch sm:flex-col gap-3">
        <span className="font-bold">Sort by</span>
        <select
          onChange={(e) => setSort(e.target.value)}
          className="w-40 lg:w-56 mx-1 h-9 flex inputWrapper-focus px-2 bg-background-light rounded-md"
        >
          {sortOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2 sm:gap-3">
        <span className="font-bold">Arrival Time</span>
        <ul className="flex flex-col gap-2 sm:gap-[10px]">
          <li className="flex items-center gap-2">
            <input
              type="radio"
              id="am"
              name="times"
              checked={arrivalAmPm === "AM"}
              onClick={() =>
                arrivalAmPm === "AM" ? setArrivalAmPm("") : setArrivalAmPm("AM")
              }
              onChange={() => {}}
            />
            <label htmlFor="am">Before Midday (AM)</label>
          </li>
          <li className="flex items-center gap-2">
            <input
              type="radio"
              id="pm"
              name="times"
              checked={arrivalAmPm === "PM"}
              onClick={() =>
                arrivalAmPm === "PM" ? setArrivalAmPm("") : setArrivalAmPm("PM")
              }
              onChange={() => {}}
            />
            <label htmlFor="pm">After Midday (PM)</label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 sm:gap-3">
        <span className="font-bold">Stops</span>
        <ul className="flex flex-col gap-2 sm:gap-[10px]">
          <li className="flex items-center gap-2">
            <input
              type="radio"
              id="nonstop"
              name="stops"
              checked={stops === "Nonstop"}
              onClick={() =>
                stops === "Nonstop" ? setStops("") : setStops("Nonstop")
              }
              onChange={() => {}}
            />
            <label htmlFor="nonstop">Nonstop</label>
          </li>
          <li className="flex items-center gap-2">
            <input
              type="radio"
              id="oneStop"
              name="stops"
              checked={stops === "1 Stop"}
              onClick={() =>
                stops === "1 Stop" ? setStops("") : setStops("1 Stop")
              }
              onChange={() => {}}
            />
            <label htmlFor="oneStop">1 Stop</label>
          </li>
          <li className="flex items-center gap-2">
            <input
              type="radio"
              id="moreStop"
              name="stops"
              checked={stops === "2+ Stops"}
              onClick={() =>
                stops === "2+ Stops" ? setStops("") : setStops("2+ Stops")
              }
              onChange={() => {}}
            />
            <label htmlFor="moreStop">2+ Stops</label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 overflow-hidden lg:overflow-visible">
        <span className="font-bold">Airlines Included</span>
        <ul className="flex flex-col gap-2 sm:gap-[10px] overflow-y-auto lg:overflow-visible max-h-20 lg:max-h-full ">
          {airlines.map((airlineItem, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id={airlineItem.toLowerCase().replace(/\s+/g, "-")}
                  name="airlines"
                  checked={airline === airlineItem}
                  onClick={() =>
                    airline === airlineItem
                      ? setAirline("")
                      : setAirline(airlineItem)
                  }
                  onChange={() => {}}
                />
                <label htmlFor={airlineItem.toLowerCase().replace(/\s+/g, "-")}>
                  {airlineItem}
                </label>
              </div>
              <span>$230</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FilterFlightList;
