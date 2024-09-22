import React from "react";

const FilterFlightList = () => {
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

  return (
    <section className="flex flex-col gap-6 pt-2 text-sm">
      <div className="flex flex-col gap-3">
        <span className="font-bold">Sort by</span>
        <select className="w-56 h-9 flex inputWrapper-focus px-2 bg-background-light rounded-md">
          {sortOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-bold">Arrival Time</span>
        <ul className="flex flex-col gap-[10px]">
          <li className="flex items-center gap-2">
            <input type="radio" id="am" name="times" />
            <label htmlFor="am">5:00 AM - 11:59 AM</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="radio" id="pm" name="times" />
            <label htmlFor="pm">12:00 PM - 5:59 PM</label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-bold">Stops</span>
        <ul className="flex flex-col gap-[10px]">
          <li className="flex items-center gap-2">
            <input type="radio" id="nonstop" name="stops" />
            <label htmlFor="nonstop">Nonstop</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="radio" id="oneStop" name="stops" />
            <label htmlFor="oneStop">1 Stop</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="radio" id="moreStop" name="stops" />
            <label htmlFor="moreStop">2+ Stop</label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-bold">Airlines Included</span>
        <ul className="flex flex-col gap-[10px] max-h-52 overflow-y-auto">
          {airlines.map((airline, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id={airline.toLowerCase().replace(/\s+/g, "-")}
                  name="airlines"
                />
                <label htmlFor={airline.toLowerCase().replace(/\s+/g, "-")}>
                  {airline}
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
