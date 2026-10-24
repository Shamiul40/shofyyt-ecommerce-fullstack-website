import React from "react";
import Container from "./Container";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";

export default function TopHeader() {
  return (
    <div className="bg-[#010f1c] text-gray-200">
      <Container className="  py-1 flex justify-between items-center">
        <p className="text-sm w-full flex  items-center px-1 md:w-auto font-medium  ">
          {" "}
          <CiDeliveryTruck className="text-2xl mr-1 text-[#ffb342]" /> express
          shipping on orders $450+{" "}
        </p>

        <div className="hidden md:inline-flex items-center text-xs text-white">
          <p className="headerTopMenu">
            English <IoChevronDown className="mt-1" />
          </p>
          <p className="headerTopMenu">
            USD <IoChevronDown className="mt-1"/>
          </p>
          <p className="headerTopMenu">
            Setting <IoChevronDown className="mt-1"/>
          </p>
        </div>
      </Container>
    </div>
  );
}
