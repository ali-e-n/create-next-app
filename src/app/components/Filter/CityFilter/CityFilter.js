"use client";
import React from "react";

const cityFilter = (props) => {
  return (
    <div>
      <button className=" border border-[#C39D63] rounded-full text-[#282828] bg-white px-6 py-1 text-[18px] focus:outline-none focus:ring-0 focus:ring-[#C39D63] focus:bg-[#eeddc3]">
        {props.title}
        {/* <MdArrowDropDown className="text-4xl" /> */}
      </button>
    </div>
  );
};

export default cityFilter;
