import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

const FilterMyFlights = () => {
  return (
    <div className="bg-background-light w-full">
      <section className="wrapper py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm font-semibold">
          <Link href="/book-flight" className="mr-2 flex gap-2 items-center">
            <FaArrowLeftLong />
            <span>Back</span>
          </Link>
          <span className="hidden xl:block px-4 py-2 rounded border-2 border-border">
            Times
          </span>
          <span className="hidden xl:block px-4 py-2 rounded border-2 border-border">
            Stops
          </span>
          <span className="hidden xl:block px-4 py-2 rounded border-2 border-border">
            Airlines
          </span>
          <span className="hidden xl:block px-4 py-2 rounded border-2 border-border">
            Airports
          </span>
          <span className="hidden xl:block px-4 py-2 rounded border-2 border-border">
            Amenities
          </span>
          <button className="hidden xl:flex items-center gap-2 ml-2">
            <span className="text-secondary">Edit Search</span>
            <FaChevronDown fill="#5493f7" className="w-3 h-3" />
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-7 ">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar fill="#d9d9d9" className="w-[14px] h-[14px" />
            </div>
            <div className="flex items-center gap-1">
              <IoIosStar fill="#d9d9d9" className="w-[14px] h-[14px" />
              <IoIosStar fill="#d9d9d9" className="w-[14px] h-[14px" />
              <IoIosStar fill="#d9d9d9" className="w-[14px] h-[14px" />
            </div>
          </div>
          <div className="h-5 w-[2px] bg-placeholder"></div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar className="w-[14px] h-[14px" />{" "}
            </div>
            <div className="flex items-center gap-1">
              <IoIosStar fill="#d9d9d9" className="w-[14px] h-[14px" />
              <IoIosStar fill="#d9d9d9" className="w-[14px] h-[14px" />
              <IoIosStar fill="#d9d9d9" className="w-[14px] h-[14px" />
            </div>
          </div>
          <div className="h-5 w-[2px] bg-placeholder"></div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar className="w-[14px] h-[14px" />{" "}
            </div>
            <div className="flex items-center gap-1">
              <IoIosStar className="w-[14px] h-[14px" />{" "}
              <IoIosStar fill="#d9d9d9" className="w-[14px] h-[14px" />
              <IoIosStar fill="#d9d9d9" className="w-[14px] h-[14px" />
            </div>
          </div>
          <div className="h-5 w-[2px] bg-placeholder"></div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar className="w-[14px] h-[14px" />
            </div>
            <div className="flex items-center gap-1">
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar fill="#d9d9d9" className="w-[14px] h-[14px" />
            </div>
          </div>
          <div className="h-5 w-[2px] bg-placeholder"></div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar className="w-[14px] h-[14px" />{" "}
            </div>
            <div className="flex items-center gap-1">
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar className="w-[14px] h-[14px" />
              <IoIosStar className="w-[14px] h-[14px" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterMyFlights;
