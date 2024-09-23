import React from "react";
import FilterMyFlights from "@/app/components/myFlights/FilterMyFlights";
import MyFlightsList from "@/app/components/myFlights/MyFlightsList";

const MyFlights = () => {
  return (
    <main className="flex flex-col pb-4">
      <FilterMyFlights />
      <MyFlightsList />
    </main>
  );
};

export default MyFlights;
