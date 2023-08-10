"use client";
import React, { useState } from "react";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="hidden md:block">
        {/* Regular SideNav for larger screens */}
        <div className="text-dark-blue">
          <div className="pt-20">
            <div className="pl-11 py-4 pr-6 border-l-4 border-yellow-400 font-bold text-xl cursor-pointer">
              Student Profiles
            </div>
            <div className="pl-11 py-4 pr-6 text-xl cursor-pointer">
              Guardian Profiles
            </div>
            <div className="pl-11 py-4 pr-6 text-xl cursor-pointer">
              Priorities + Household
            </div>
            <div className="pl-11 py-4 pr-6 text-xl cursor-pointer">
              Account Settings
            </div>
          </div>{" "}
        </div>
      </div>

      <div className="md:hidden">
        {/* Hamburger menu for smaller screens */}
        {!isOpen && (
          <button
            onClick={handleToggle}
            className="flex flex-col w-6 h-6 justify-around ml-2 mt-2"
          >
            <div className="h-1 w-6 bg-black"></div>
            <div className="h-1 w-6 bg-black"></div>
            <div className="h-1 w-6 bg-black"></div>
          </button>
        )}
        <div className="relative md:hidden">
          {isOpen && (
            <div className="top-[175px] h-[calc(100vh-175px)] left-0 w-60 bg-white z-100 text-dark-blue border-r border-gray-300">
              <button
                onClick={handleToggle}
                className="flex flex-col w-6 h-6 justify-around ml-2 mt-2"
              >
                <div className="h-1 w-6 bg-black"></div>
                <div className="h-1 w-6 bg-black"></div>
                <div className="h-1 w-6 bg-black"></div>
              </button>
              <div className="pt-20 ">
                <div className="pl-11 py-4 pr-6 border-l-4 border-yellow-400 font-bold text-xl cursor-pointer">
                  Student Profiles
                </div>
                <div className="pl-11 py-4 pr-6 text-xl cursor-pointer">
                  Guardian Profiles
                </div>
                <div className="pl-11 py-4 pr-6 text-xl cursor-pointer">
                  Priorities + Household
                </div>
                <div className="pl-11 py-4 pr-6 text-xl cursor-pointer">
                  Account Settings
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
