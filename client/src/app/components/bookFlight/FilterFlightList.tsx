import React from "react";

const FilterFlightList = () => {
  return (
    <section className="flex flex-col gap-7 pt-4">
      <div className="flex flex-col gap-4">
        <span className="font-bold">Sort by</span>
        <select className="w-56 h-9 flex inputWrapper-focus px-2 bg-background-light rounded-md">
          <option selected>Lowest Price</option>
          <option>Highest Price</option>
        </select>
      </div>
      <div className="flex flex-col gap-6">
        <span className="font-bold">Arrival Time</span>
        <ul className="flex flex-col gap-4">
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
      <div className="flex flex-col gap-6">
        <span className="font-bold">Airlines Included</span>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="radio" id="alitalia" name="airlines" />
              <label htmlFor="alitalia">Alitalia</label>
            </div>
            <span>$230</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="radio" id="lufthansa" name="airlines" />
              <label htmlFor="lufthansa">Lufthansa</label>
            </div>
            <span>$230</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="radio" id="air-france" name="airlines" />
              <label htmlFor="air-france">Air France</label>
            </div>
            <span>$230</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="radio" id="brussels-airlines" name="airlines" />
              <label htmlFor="brussels-airlines">Brussels Airlines</label>
            </div>
            <span>$230</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="radio" id="air-italy" name="airlines" />
              <label htmlFor="air-italy">Air Italy</label>
            </div>
            <span>$230</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="radio" id="siberia" name="airlines" />
              <label htmlFor="siberia">Siberia</label>
            </div>
            <span>$230</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FilterFlightList;
