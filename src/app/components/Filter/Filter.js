import React from "react";
import { MdFilterList } from "react-icons/md";
import CityFilter from "./CityFilter/CityFilter";
import SearchButton from "./SearchButton/SearchButton";

const Filter = () => {
  return (
    <>
      {/* //Search Box */}
      <div className="w-full flex flex-row content-center justify-center bg-[#f9f3e9] py-5 px-5 space-x-5">
        {/* <h1>Filters</h1> */}
        <SearchButton />

        <div className="flex items-center space-x-2">
          <span className="text-black text-lg">Filter by</span>
          <button className="flex items-center justify-center w-8 h-8 rounded-full cursor-default">
            <MdFilterList className="text-lg" />
          </button>

          <CityFilter />
        </div>
      </div>
    </>
  );
};

export default Filter;
