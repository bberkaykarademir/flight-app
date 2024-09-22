"use client";
import { useFiltersStore } from "@/app/state/filtersStore";
import React, { useEffect, useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoMdCalendar } from "react-icons/io";

const SearchFlight = () => {
  const setFilters = useFiltersStore((state) => state.setFilters);
  const filters = useFiltersStore((state) => state.filters);

  const cities = [
    "New York",
    "London",
    "Paris",
    "Amsterdam",
    "Dubai",
    "Tokyo",
    "Singapore",
    "Sydney",
    "Los Angeles",
    "Hong Kong",
  ];

  const [roundTrip, setRoundTrip] = useState("Round Trip");
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [departureDateTime, setDepartureDateTime] = useState("");
  const [arrivalDateTime, setArrivalDateTime] = useState("");

  const showFlights = () => {
    console.log(
      roundTrip,
      departureCity,
      arrivalCity,
      departureDateTime,
      arrivalDateTime
    );
    setFilters({
      roundTrip,
      departureCity,
      arrivalCity,
      departureDateTime,
      arrivalDateTime,
    });
  };

  return (
    <section className="flex flex-col gap-5 bg-background-light p-6 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoAirplaneSharp fill="#333333" className="w-5 h-5" />
          <h2 className="text-lg font-bold">BOOK YOUR FLIGHT</h2>
        </div>
        <div className="flex gap-[2px] text-sm">
          <button
            onClick={() => setRoundTrip("Round Trip")}
            className={`font-semibold  px-4 py-3 rounded-l-full ${
              roundTrip === "Round Trip"
                ? "bg-primary text-text-inverse"
                : "bg-primary-light text-primary"
            }`}
          >
            Round trip
          </button>
          <button
            onClick={() => setRoundTrip("One Way")}
            className={`font-semibold  px-4 py-3 rounded-r-full ${
              roundTrip === "One Way"
                ? "bg-primary text-text-inverse"
                : "bg-primary-light text-primary"
            }`}
          >
            One way
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex gap-1 flex-1">
          <div className="inputWrapper inputWrapper-focus flex items-center pl-3 pr-1 gap-2 flex-1 border-2 border-[#dcdcdc] rounded-l-full">
            <FaPlaneDeparture fill="#501a93" className="w-5 h-5" />
            <select
              className="w-full h-full py-2 outline-none"
              onChange={(e) => setDepartureCity(e.currentTarget.value)}
            >
              <option value="" selected>
                All Departure Cities
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="inputWrapper inputWrapper-focus flex items-center pl-3 pr-1 gap-2 flex-1 border-2 border-[#dcdcdc] rounded-r-full">
            <FaPlaneArrival fill="#501a93" className="w-5 h-5" />
            <select
              className="w-full h-full py-2 outline-none rounded-r-xl"
              onChange={(e) => setArrivalCity(e.currentTarget.value)}
            >
              <option value="" selected>
                All Arrival Cities
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-1 flex-1">
          <div className="inputWrapper inputWrapper-focus flex items-center pl-3 pr-1 gap-2 flex-1 border-2 border-[#dcdcdc] rounded-l-full">
            <IoMdCalendar fill="#501a93" className="w-7 h-7" />
            <input
              onChange={(e) => setDepartureDateTime(e.currentTarget.value)}
              type="date"
              className="w-full h-full px-[10px] py-2"
            />
          </div>
          <div className="inputWrapper inputWrapper-focus flex items-center pl-2 pr-1  flex-1 border-2 border-[#dcdcdc] rounded-r-full">
            <IoMdCalendar fill="#501a93" className="w-7 h-7" />
            <input
              onChange={(e) => setArrivalDateTime(e.currentTarget.value)}
              type="date"
              className="w-full h-full px-[10px] py-2"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => showFlights()}
        className="w-fit bg-primary text-text-inverse font-semibold px-4 py-[10px] rounded-md"
      >
        Show flights
      </button>
    </section>
  );
};

export default SearchFlight;
