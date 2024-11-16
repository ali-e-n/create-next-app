"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { MdArrowDropDown } from "react-icons/md";

const HotelFilter = () => {
  let experience = ["Breakfast", "Lunch", "Brunch", "Dinner"];

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="btnStructure">
            Hotel
            <MdArrowDropDown className="text-4xl" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
          className=" bg-slate-50 text-black rounded-lg border border-[#DDDDDD]"
        >
          {/* <PopoverContent> */}

          {experience.map((experience) => (
            <DropdownItem key={experience}>{experience}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default HotelFilter;
