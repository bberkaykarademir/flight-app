import React from "react";
import Header from "@/app/components/bookFlight/Header";
import SearchFlight from "@/app/components/bookFlight/SearchFlight";
import FlightList from "@/app/components/bookFlight/FlightList";
import FilterFlightList from "@/app/components/bookFlight/FilterFlightList";
import OtherServices from "@/app/components/bookFlight/OtherServices";

const BookFlight = () => {
  return (
    <div className="wrapper flex flex-col gap-2 pb-6 max-h-screen overflow-y-scroll">
      <Header />
      <main className="flex gap-7 flex-grow overflow-hidden">
        <div className="flex flex-col gap-6 flex-grow overflow-hidden">
          <SearchFlight />
          <div className="flex gap-7 overflow-hidden">
            <FlightList />
            <FilterFlightList />
          </div>
        </div>
        <OtherServices />
      </main>
    </div>
  );
};

export default BookFlight;
