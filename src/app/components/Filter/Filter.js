import React from "react";
import { MdFilterList } from "react-icons/md";
import CityFilter from "./CityFilter/CityFilter";

const Filter = () => {
  return (
    <>
      {/* //Search Box */}
      <div className="w-full flex flex-row content-center justify-center bg-[#f9f3e9] py-5 px-5 space-x-5">
        {/* <h1>Filters</h1> */}
        <div className="search ">
          <input
            type="Search"
            aria-label="Search"
            placeholder="Search by kyeword"
            className="w-56 search border border-[#DDDDDD] rounded-full  text-gray-600  bg-white px-4 py-2 text-lg focus:ring-1 focus:ring-[#C39D63]  focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-black text-lg">Filter by</span>
          <button className="flex items-center justify-center w-8 h-8 rounded-full cursor-default">
            <MdFilterList className="text-lg" />
          </button>
        </div>
      </div>
      <CityFilter />
    </>
  );
};

export default Filter;
