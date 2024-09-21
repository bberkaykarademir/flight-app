import React from "react";
import { FaChevronDown } from "react-icons/fa";

const MyFlights = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center bg-background-light py-8 px-9 rounded shadow">
        <div className="flex gap-6">
          <div className="bg-placeholder w-10 h-10 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center text-2xl">
              <span>7:40 AM</span>
              <div className="h-[2px] w-4 mt-1 bg-text"></div>
              <span>9:12 AM</span>
            </div>
            <div className="flex gap-28 items-center">
              <div className="flex flex-col">
                <span>American Airlines</span>
                <button className="flex items-center gap-2">
                  <span className="text-secondary text-sm">Flight Details</span>
                  <FaChevronDown fill="#5493f7" className="w-3 h-3" />
                </button>
              </div>
              <div className="flex gap-20 items-center">
                <div className="flex flex-col">
                  <span>Nonstop</span>
                  <span className="text-text-light text-sm">1h 32m</span>
                </div>
                <div className="flex flex-col">
                  <span>SFO to LAX</span>
                  <span className="text-text-light text-sm">DL 1443</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-22 h-26 flex flex-col items-center justify-between bg-background-light border-2 border-[#dcdcdc] pt-3 pb-4 rounded-lg">
            <span className="font-bold text-lg">$156</span>
            <span className="text-text-light font-semibold text-sm">Main</span>
          </div>
          <div className="w-22 h-26 bg-[#f5f5f6] rounded-lg"></div>
          <div className="w-22 h-26 bg-[#f5f5f6] rounded-lg"></div>
          <div className="w-22 h-26 flex flex-col items-center justify-between bg-background-light border-2 border-[#dcdcdc] pt-3 pb-4 rounded-lg">
            <span className="font-bold text-lg">$156</span>
            <span className="text-text-light font-semibold text-sm">Main</span>
          </div>
          <div className="w-22 h-26 bg-[#f5f5f6] rounded-lg"></div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-background-light py-8 px-9 rounded shadow">
        <div className="flex gap-6">
          <div className="bg-placeholder w-10 h-10 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center text-2xl">
              <span>7:40 AM</span>
              <div className="h-[2px] w-4 mt-1 bg-text"></div>
              <span>9:12 AM</span>
            </div>
            <div className="flex gap-28 items-center">
              <div className="flex flex-col">
                <span>American Airlines</span>
                <button className="flex items-center gap-2">
                  <span className="text-secondary text-sm">Flight Details</span>
                  <FaChevronDown fill="#5493f7" className="w-3 h-3" />
                </button>
              </div>
              <div className="flex gap-20 items-center">
                <div className="flex flex-col">
                  <span>Nonstop</span>
                  <span className="text-text-light text-sm">1h 32m</span>
                </div>
                <div className="flex flex-col">
                  <span>SFO to LAX</span>
                  <span className="text-text-light text-sm">DL 1443</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-22 h-26 flex flex-col items-center justify-between bg-background-light border-2 border-[#dcdcdc] pt-3 pb-4 rounded-lg">
            <span className="font-bold text-lg">$156</span>
            <span className="text-text-light font-semibold text-sm">Main</span>
          </div>
          <div className="w-22 h-26 bg-[#f5f5f6] rounded-lg"></div>
          <div className="w-22 h-26 bg-[#f5f5f6] rounded-lg"></div>
          <div className="w-22 h-26 flex flex-col items-center justify-between bg-background-light border-2 border-[#dcdcdc] pt-3 pb-4 rounded-lg">
            <span className="font-bold text-lg">$156</span>
            <span className="text-text-light font-semibold text-sm">Main</span>
          </div>
          <div className="w-22 h-26 bg-[#f5f5f6] rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default MyFlights;
