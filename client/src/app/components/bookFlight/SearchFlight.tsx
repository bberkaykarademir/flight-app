"use client";
import { useFiltersStore } from "@/app/state/filtersStore";
import React, { useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoMdCalendar } from "react-icons/io";
import { convertToISOWithTimezone } from "@/app/utils/dateParser";

const SearchFlight = () => {
  const setFilters = useFiltersStore((state) => state.setFilters);

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
    setFilters({
      roundTrip,
      departureCity,
      arrivalCity,
      fromDateTime: convertToISOWithTimezone(departureDateTime),
      toDateTime: convertToISOWithTimezone(arrivalDateTime),
    });
  };

  return (
    <section className="text-sm md:text-base flex flex-col gap-5 bg-background-light p-6 rounded-xl">
      <div className="flex items-center justify-between flex-col md:flex-row gap-5">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <IoAirplaneSharp fill="#333333" className="w-5 h-5" />
          <h2 className="md:text-lg font-bold">BOOK YOUR FLIGHT</h2>
        </div>
        <div className="flex gap-[2px] text-sm mx-auto md:mx-0">
          <button
            onClick={() => setRoundTrip("Round Trip")}
            className={`font-semibold px-3 md:px-4 py-2 md:py-3 rounded-l-full ${
              roundTrip === "Round Trip"
                ? "bg-primary text-text-inverse"
                : "bg-primary-light text-primary"
            }`}
          >
            Round trip
          </button>
          <button
            onClick={() => setRoundTrip("One Way")}
            className={`font-semibold px-3 md:px-4 py-2 md:py-3 rounded-r-full ${
              roundTrip === "One Way"
                ? "bg-primary text-text-inverse"
                : "bg-primary-light text-primary"
            }`}
          >
            One way
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-3">
        <div className="flex flex-col sm:flex-row gap-1 flex-1 w-full lg:w-fit">
          <div className="inputWrapper inputWrapper-focus flex items-center pl-3 pr-1 gap-2 flex-1 border-2 border-[#dcdcdc] sm:rounded-l-full">
            <FaPlaneDeparture fill="#501a93" className="w-5 h-5" />
            <select
              className="w-full h-full py-2 outline-none"
              defaultValue={""}
              onChange={(e) => setDepartureCity(e.currentTarget.value)}
            >
              <option value="">All Departure Cities</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="inputWrapper inputWrapper-focus flex items-center pl-3 pr-1 gap-2 flex-1 border-2 border-[#dcdcdc] sm:sm:rounded-r-full">
            <FaPlaneArrival fill="#501a93" className="w-5 h-5" />
            <select
              className="w-full h-full py-2 outline-none rounded-r-xl"
              defaultValue={""}
              onChange={(e) => setArrivalCity(e.currentTarget.value)}
            >
              <option value="">All Arrival Cities</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-1 flex-1 w-full lg:w-fit">
          <div className="inputWrapper inputWrapper-focus flex items-center pl-2 md:pl-3 pr-1 md:gap-2 flex-1 border-2 border-[#dcdcdc] sm:rounded-l-full">
            <IoMdCalendar fill="#501a93" className="w-7 h-7" />
            <input
              onChange={(e) => setDepartureDateTime(e.currentTarget.value)}
              type="date"
              className="w-full h-full px-[10px] py-2"
            />
          </div>
          <div className="inputWrapper inputWrapper-focus flex items-center pl-2 pr-1  flex-1 border-2 border-[#dcdcdc] sm:rounded-r-full">
            <IoMdCalendar fill="#501a93" className="w-7 h-7" />
            <input
              onChange={(e) => setArrivalDateTime(e.currentTarget.value)}
              type="date"
              className="w-full h-full px-[10px] py-2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <button
          onClick={() => showFlights()}
          className="w-fit bg-primary text-text-inverse font-semibold px-4 py-[10px] rounded-md"
        >
          Show flights
        </button>
        <span className="text-xs md:text-sm text-red-700">*Date range can be a maximum of 3 days.</span>
      </div>
    </section>
  );
};

export default SearchFlight;
