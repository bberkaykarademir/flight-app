"use client";
import React, { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { getFlights } from "@/app/api/myFlights";
import { useQuery } from "@tanstack/react-query";
import { Flight } from "@/app/api/flights";
import { formatTo12Hour, getTimeDifference } from "@/app/utils/dateParser";
import { useMyFlightsStore } from "@/app/state/myFlightsStore";

const MyFlights = () => {
  const filters = useMyFlightsStore((state) => state.filters);
  const resetFilters = useMyFlightsStore((state) => state.resetFilters);

  const { data, error, isLoading } = useQuery({
    queryKey: ["myFlights", filters.sort],
    queryFn: () => getFlights(filters.sort),
    refetchOnWindowFocus: false,
    retry: 0,
  });

  useEffect(() => {
    resetFilters();
  }, []);

  return (
    <section className="flex flex-col gap-4 text-sm md:text-base">
      {isLoading && (
        <div className="flex flex-col gap-4">
          <div className="skeleton bg-placeholder rounded-xl"></div>
          <div className="skeleton bg-placeholder rounded-xl"></div>
          <div className="skeleton bg-placeholder rounded-xl"></div>
        </div>
      )}
      {error && <p>Error: Failed to fetch valid flight data</p>}
      {data && data.length === 0 && <p>No flights found</p>}
      {data &&
        data.map((flight: Flight) => (
          <div className="flex flex-col lg:flex-row justify-between items-center bg-background-light py-4 md:py-8 px-5 md:px-9 rounded shadow">
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:gap-6">
              <div className="bg-placeholder w-10 h-10 rounded-full"></div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center text-xl md:text-2xl mx-auto lg:mx-0">
                  <span>{formatTo12Hour(flight.departureDateTime)}</span>
                  <div className="h-[2px] w-4 mt-1 bg-text"></div>
                  <span>
                    {flight.arrivalDateTime
                      ? formatTo12Hour(flight.arrivalDateTime)
                      : "Not specified"}
                  </span>
                </div>
                <div className="flex items-center text-xs sm:text-sm">
                  <div className="flex w-32 sm:w-40 flex-col">
                    <span>{flight.airline}</span>
                    <button className="flex items-center gap-1 md:gap-2">
                      <span className="text-secondary text-sm">
                        Flight Details
                      </span>
                      <FaChevronDown fill="#5493f7" className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-col w-20 sm:w-28">
                      <span>{flight.stops}</span>
                      <span className="text-text-light text-sm">1h 32m</span>
                    </div>
                    <div className="flex flex-col">
                      <span>
                        {flight.departureCode} to {flight.arrivalCode}
                      </span>
                      <span className="text-text-light text-sm">
                        {flight.flightName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-3 lg:mt-0 flex-wrap justify-center sm:justify-stretch">
              <div className="w-16 h-20 md:w-22 md:h-26 flex flex-col items-center justify-between bg-background-light border-2 border-[#dcdcdc] pt-3 pb-4 rounded-lg">
                <span className="font-bold text-base md:text-lg">{flight.price}$</span>
                <span className="text-text-light font-semibold text-sm">
                  Price
                </span>
              </div>
              <div className="w-16 h-20 md:w-22 md:h-26 flex flex-col items-center justify-between bg-background-light border-2 border-[#dcdcdc] pt-3 pb-4 rounded-lg">
                <span className="font-bold text-base md:text-lg">
                  {flight.visa ? "Yes" : "No"}
                </span>
                <span className="text-text-light font-semibold text-sm">
                  Visa
                </span>
              </div>
              <div className="hidden sm:block w-16 h-20 md:w-22 md:h-26 bg-[#f5f5f6] rounded-lg"></div>
              <div className="w-16 h-20 md:w-22 md:h-26 flex flex-col items-center justify-between bg-background-light border-2 border-[#dcdcdc] pt-3 pb-4 rounded-lg">
                <span className="text-text-light text-center my-auto font-semibold text-sm">
                  {flight.roundTrip}
                </span>
              </div>
              <div className="w-16 h-20 md:w-22 md:h-26 flex flex-col items-center justify-between bg-background-light border-2 border-[#dcdcdc] pt-3 pb-4 rounded-lg">
                <span className="font-bold text-base md:text-lg">{flight.belts || 0}</span>
                <span className="text-text-light font-semibold text-sm">
                  Belts
                </span>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default MyFlights;
