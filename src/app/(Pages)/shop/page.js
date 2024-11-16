import { Banner } from "@/app/components/Banner/Banner";
import Filter from "@/app/components/Filter/Filter";
import OfferDemo from "@/app/components/OfferDemo/offerDemo";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Banner />
      <Filter />
      <OfferDemo />
    </div>
  );
};

export default page;
