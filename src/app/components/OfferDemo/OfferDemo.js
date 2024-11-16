"use client";
import React, { useState } from "react";
import offers from "@/offers.json"; // Importing offers from the JSON file

function OfferDemo() {
  const [currentPage, setCurrentPage] = useState(0);
  const offersPerPage = 12; // Total offers to display per page
  const totalOffers = offers.length;
  const totalPages = Math.ceil(totalOffers / offersPerPage); // Calculate total pages

  // Calculate the index of the first and last offer to display
  const startIndex = currentPage * offersPerPage;
  const endIndex = startIndex + offersPerPage;
  const currentOffers = offers.slice(startIndex, endIndex); // Slice offers array for current page

  // Function to handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-6 mx-14 my-5 ">
        {" "}
        {/* Using Tailwind CSS grid for layout */}
        {currentOffers.map((offer, index) => (
          <div
            key={index}
            className="w-full h-50 bg-white p-4 text-black cursor-pointer"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-auto rounded-md cursor-pointer"
            />
            <strong>
              <p className="text-md ">{offer.title}</p>{" "}
            </strong>
            <p className="text-sm text-[#C39D63] cursor-pointer">
              {offer.location}
            </p>
          </div>
        ))}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0} // Disable if on first page
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1} // Disable if on last page
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
      {/* Logging to the console */}
      {console.log(offers)} {/* Optional: logging the entire offers data */}
    </div>
  );
}

export default OfferDemo;
