"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {
  MdArrowCircleDown,
  MdArrowDownward,
  MdArrowDropDown,
} from "react-icons/md";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   Button,
// } from "@nextui-org/react";

const cityFilter = () => {
  let cities = ["Dubai", "Abu Dhabi", "N.Emirates", "KSA"];
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="btnStructure">
            City
            <MdArrowDropDown className="text-4xl" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {/* <PopoverContent> */}

          {cities.map((city) => (
            <DropdownItem key={city}>{city}</DropdownItem>
          ))}

          <DropdownItem key="copy">Copy link</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
          </DropdownItem>
          {/* </PopoverContent> */}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default cityFilter;
