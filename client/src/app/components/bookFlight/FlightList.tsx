"use client";
import { Flight, getFlights } from "@/app/api/flights";
import { bookFlight } from "@/app/api/myFlights";
import { useFiltersStore } from "@/app/state/filtersStore";
import { useQuery, useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { IoAirplaneSharp } from "react-icons/io5";
import { LuPlaneTakeoff, LuPlaneLanding } from "react-icons/lu";
import { formatTo12Hour, getTimeDifference } from "@/app/utils/dateParser";
import { useRouter } from "next/navigation";
const FlightList = () => {
  const router = useRouter();
  const filters = useFiltersStore((state) => state.filters);
  const resetFilters = useFiltersStore((state) => state.resetFilters);

  useEffect(() => {
    resetFilters();
  }, []);

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["flights", filters],
    queryFn: () => getFlights(filters),
    refetchOnWindowFocus: false,
    enabled: !!filters.roundTrip,
    retry: 0,
  });

  const {
    data: bookedFlight,
    error: bookError,
    isPending: isBooking,
    mutateAsync: book,
  } = useMutation({
    mutationFn: (flight: Flight) => bookFlight(flight),
    onSuccess: () => {
      setTimeout(() => {
        router.push("/my-flights");
      }, 1000);
    },
  });

  const [bookingFlightNumber, setBookingFlightNumber] = useState(-1);

  return (
    <section className="flex flex-col gap-5 flex-grow overflow-y-auto">
      {isLoading && (
        <div className="flex flex-col gap-4">
          <div className="skeleton bg-placeholder rounded-xl"></div>
          <div className="skeleton bg-placeholder rounded-xl"></div>
        </div>
      )}
      {error && <p>Error: Failed to fetch valid flight data</p>}
      {data && data.length === 0 && <p>No flights found</p>}
      {data &&
        data.map((flight) => (
          <div className="flex flex-col" key={flight.flightNumber}>
            <div className="relative flex flex-col gap-4 bg-background-light py-5 px-6 rounded-tl-xl rounded-r-xl">
              <h3 className="font-bold">
                {flight.departureCity} - {flight.arrivalCity} (
                {flight.flightNumber})
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <LuPlaneTakeoff className="w-5 h-5" />
                    <span className="text-sm">Departure</span>
                  </div>
                  <span className="text-lg font-bold mt-1">
                    {formatTo12Hour(flight.departureDateTime)}
                  </span>
                  <div className="flex items-center gap-1 text-sm">
                    <span>Airport:</span>
                    <span>{flight.departureCode}</span>
                  </div>
                </div>
                <div className="w-20 h-1 bg-[#989898]"></div>
                <div className="flex flex-col items-center gap-2">
                  <span>{flight.airline}</span>
                  <IoAirplaneSharp fill="#501a93" className="w-6 h-6" />
                  <span className="text-sm">
                    {getTimeDifference(
                      flight.departureDateTime,
                      flight.arrivalDateTime
                    )}
                    ({flight.stops})
                  </span>
                </div>
                <div className="w-20 h-1 bg-[#989898]"></div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <LuPlaneLanding className="w-5 h-5" />
                    <span className="text-sm">Arrival</span>
                  </div>
                  <span className="text-lg font-bold mt-1">
                    {flight.arrivalDateTime
                      ? formatTo12Hour(flight.arrivalDateTime)
                      : "Not specified"}
                  </span>
                  <div className="flex items-center gap-1 text-sm">
                    <span>Airport:</span>
                    <span>{flight.arrivalCode}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-lg text-primary font-bold">
                  Price: {flight.price}$
                </span>
                <span className="text-text-light font-semibold text-sm">
                  {flight.roundTrip}
                </span>
              </div>
              <button
                onClick={async () => {
                  setBookingFlightNumber(flight.flightNumber);
                  await book(flight);
                }}
                className="absolute  right-0 bottom-0 flex items-center justify-center rounded-br-xl rounded-tl-xl w-40 h-18 bg-primary text-text-inverse font-semibold"
              >
                {bookedFlight && bookingFlightNumber === flight.flightNumber ? (
                  <span>Booked!</span>
                ) : isBooking && bookingFlightNumber === flight.flightNumber ? (
                  <span className="loader"></span>
                ) : (
                  "Book Flight"
                )}
              </button>
            </div>
            <button className="underline w-fit rounded-b-xl text-sm bg-primary-light text-accent-light py-3 px-5">
              Check the details
            </button>
          </div>
        ))}
    </section>
  );
};

export default FlightList;
