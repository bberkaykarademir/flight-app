import React from "react";
import Link from "next/link";
import { FaTag, FaUserCircle } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { IoAirplaneSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 bg-transparent">
      <Link href="/" className="flex items-center gap-2">
        <div className="flex items-center bg-primary rounded-full w-8 h-8">
          <IoAirplaneSharp fill="white" className="w-7 h-7" />
        </div>
        <h1 className="text-xl font-bold">PLANE SCAPE</h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-6 ">
          <li>
            <Link href="/" className="flex items-center gap-2">
              <FaTag fill="#501a93" />
              <span>Deals</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center gap-2">
              <BiWorld fill="#501a93" className="w-[18px] h-[18px]" />
              <span>Discover</span>
            </Link>
          </li>
          <li className="ml-2">
            <Link href="/my-flights" className="flex items-center gap-2">
              <FaUserCircle fill="#501a93" className="w-8 h-8" />
              <span>Joane Smith</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
