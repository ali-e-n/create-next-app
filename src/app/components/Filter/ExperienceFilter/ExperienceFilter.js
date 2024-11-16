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

const ExperienceFilter = () => {
  let experience = ["Breakfast", "Lunch", "Brunch", "Dinner"];

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="btnStructure">
            Experience
            <MdArrowDropDown className="text-4xl" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
          className=" bg-[#e0d9cf] text-black rounded-lg w-96"
        >
          {/* <PopoverContent> */}

          {experience.map((experience) => (
            <DropdownItem key={experience} className="text-[15px] gap-3">
              {experience}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ExperienceFilter;
