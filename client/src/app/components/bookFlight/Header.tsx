import React from "react";
import Link from "next/link";
import { FaTag, FaUserCircle } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { IoAirplaneSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 bg-transparent">
      <Link href="/" className="flex items-center gap-2">
        <div className="flex items-center bg-primary rounded-full w-5 md:w-8 h-5 md:h-8">
          <IoAirplaneSharp fill="white" className="w-4 h-4 md:w-7 md:h-7" />
        </div>
        <h1 className="text-lg md:text-xl font-bold">PLANE SCAPE</h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-2 md:gap-6 text-sm md:text-base ">
          <li className="hidden sm:block">
            <Link href="/" className="flex items-center gap-2">
              <FaTag fill="#501a93" />
              <span>Deals</span>
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link href="/" className="flex items-center gap-2">
              <BiWorld fill="#501a93" className="w-[18px] h-[18px]" />
              <span>Discover</span>
            </Link>
          </li>
          <li className="md:ml-2">
            <Link href="/my-flights" className="flex items-center gap-2">
              <FaUserCircle fill="#501a93" className="w-[18px] h-[18px] md:w-8 md:h-8" />
              <span>Joane Smith</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
