import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="h-24 w-full ">
      <div className="h-9 px-6 py-1">
        <ul className="flex w-full cursor-pointer justify-end gap-4 text-xs font-normal">
          <li>Help</li>
          <li>Orders & Returns</li>
          <li>Hi,John</li>
        </ul>
      </div>
      <div className="flex h-16 items-center px-6">
        <div className=" w-1/4 cursor-pointer text-3xl font-bold">
          ECOMMERCE
        </div>
        <div className="w-1/2">
          <ul className="flex cursor-pointer justify-center gap-7">
            <li>Categories</li>
            <li>Sale</li>
            <li>Clearance</li>
            <li>New Stock</li>
            <li>Trending</li>
          </ul>
        </div>
        <div className="flex w-1/4 cursor-pointer justify-end gap-5">
          <FiShoppingCart size="20px" />
          <HiMiniMagnifyingGlass size="20px" />
        </div>
      </div>
      <div className="flex h-9 items-center justify-center gap-4 bg-[#F4F4F4]">
        <MdKeyboardArrowLeft size="16px" />
        <span className="text-sm font-medium">
          Get 10% off on business sign up
        </span>
        <MdKeyboardArrowRight size="16px" />
      </div>
    </div>
  );
};

export default Navbar;
