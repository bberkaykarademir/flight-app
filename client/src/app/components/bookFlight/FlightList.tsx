import React from "react";
import { IoAirplaneSharp } from "react-icons/io5";
import { LuPlaneTakeoff, LuPlaneLanding } from "react-icons/lu";

const FlightList = () => {
  return (
    <section className="flex flex-col gap-5 flex-grow">
      <div className="flex flex-col">
        <div className="relative flex flex-col gap-4 bg-background-light py-5 px-6 rounded-tl-xl rounded-r-xl">
          <h3 className="font-bold">Milano - Madrid</h3>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <LuPlaneTakeoff className="w-5 h-5" />
                <span className="text-sm">Departure</span>
              </div>
              <span className="text-lg font-bold mt-1">7:30 AM</span>
              <div className="flex items-center gap-1 text-sm">
                <span>Airport:</span>
                <span>MXP</span>
              </div>
            </div>
            <div className="w-20 h-1 bg-[#989898]"></div>
            <div className="flex flex-col items-center gap-2">
              <span>Alitalia</span>
              <IoAirplaneSharp fill="#501a93" className="w-6 h-6" />
              <span className="text-sm">2h 25m (Nonstop)</span>
            </div>
            <div className="w-20 h-1 bg-[#989898]"></div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <LuPlaneLanding className="w-5 h-5" />
                <span className="text-sm">Arrival</span>
              </div>
              <span className="text-lg font-bold mt-1">9:55 AM</span>
              <div className="flex items-center gap-1 text-sm">
                <span>Airport:</span>
                <span>MXP</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg text-primary font-bold">Price: $200</span>
            <span className="text-[#585858] font-semibold text-sm">
              Round Trip
            </span>
          </div>
          <button className="absolute right-0 bottom-0 rounded-br-xl rounded-tl-xl py-6 px-10 bg-primary text-text-inverse font-semibold">
            Book Flight
          </button>
        </div>
        <button className="underline w-fit rounded-b-xl text-sm bg-primary-light text-accent-light py-3 px-5">
          Check the details
        </button>
      </div>
      <div className="flex flex-col">
        <div className="relative flex flex-col gap-4 bg-background-light py-5 px-6 rounded-tl-xl rounded-r-xl">
          <h3 className="font-bold">Milano - Madrid</h3>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <LuPlaneTakeoff className="w-5 h-5" />
                <span className="text-sm">Departure</span>
              </div>
              <span className="text-lg font-bold mt-1">7:30 AM</span>
              <div className="flex items-center gap-1 text-sm">
                <span>Airport:</span>
                <span>MXP</span>
              </div>
            </div>
            <div className="w-20 h-1 bg-[#989898]"></div>
            <div className="flex flex-col items-center gap-2">
              <span>Alitalia</span>
              <IoAirplaneSharp fill="#501a93" className="w-6 h-6" />
              <span className="text-sm">2h 25m (Nonstop)</span>
            </div>
            <div className="w-20 h-1 bg-[#989898]"></div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <LuPlaneLanding className="w-5 h-5" />
                <span className="text-sm">Arrival</span>
              </div>
              <span className="text-lg font-bold mt-1">9:55 AM</span>
              <div className="flex items-center gap-1 text-sm">
                <span>Airport:</span>
                <span>MXP</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg text-primary font-bold">Price: $200</span>
            <span className="text-[#585858] font-semibold text-sm">
              Round Trip
            </span>
          </div>
          <button className="absolute right-0 bottom-0 rounded-br-xl rounded-tl-xl py-6 px-10 bg-primary text-text-inverse font-semibold">
            Book Flight
          </button>
        </div>
        <button className="underline w-fit rounded-b-xl text-sm bg-primary-light text-accent-light py-3 px-5">
          Check the details
        </button>
      </div>
    </section>
  );
};

export default FlightList;
