import React from "react";
import { MdFilterList } from "react-icons/md";
import CityFilter from "./CityFilter/CityFilter";
import SearchButton from "./SearchButton/SearchButton";
import ExperienceFilter from "./ExperienceFilter/ExperienceFilter";
import HotelFilter from "./HotelFilter/HotelFilter";
import PriceFilter from "./PriceFilter/PriceFilter";

const Filter = () => {
  return (
    <>
      <div className="w-full flex flex-row content-center justify-center  py-5 px-5 space-x-5">
        {/* <h1>Filters</h1> */}

        {/* <SearchButton /> */}

        <div className="flex items-center space-x-2">
          <span className="text-black text-lg">Filter by</span>
          <button className="flex items-center justify-center w-8 h-8 rounded-full cursor-default">
            <MdFilterList className="text-lg" />
          </button>
          <ExperienceFilter />
          <HotelFilter />
          <PriceFilter />
        </div>
      </div>
      {/* //Search Box */}
      <div className="w-full flex flex-row content-center justify-center  py-5 px-5 space-x-5">
        <CityFilter title="Dubai" />
        <CityFilter title="Abu Dhabi" />
        <CityFilter title="N.Emirates" />
        <CityFilter title="KSA" />
        <CityFilter title="Oman" />
        <CityFilter title="Bahrain" />
        <CityFilter title="Jordan" />
        <CityFilter title="South Africa" />
        <CityFilter title="Kuwait" />
        <CityFilter title="Qatar" />
      </div>
    </>
  );
};

export default Filter;

// bg-[#f9f3e9]
