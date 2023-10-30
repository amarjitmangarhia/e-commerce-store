import React from "react";
import featuredImage from "../img/featured_product.jpg"
import { NavLink } from "react-router-dom";
const Slider = () => {
  return (
    <div>
      <div className="flex md:flex-row  flex-col justify-center items-center border p-[30px] bg-white border-1 border-[#7E7C7C] mt-[20px]">
        <div className="mr-[40px]">
          <img className="max-md: w-100" src={featuredImage} alt="featuredImage" />
        </div>
        <div>
          <p className="text-[30px] max-md:text-xxl">Most Selling One!</p>
          <div className="max-md:text-[30px] text-[40px]">Intel Core i9 Desktop Processor</div>
          <div className="text-[20px]">Intel Core i9-10900K Desktop Processor 10 Cores up to 5.3 GHz Unlocked  LGA1200 (Intel 400 Series Chipset) 125W</div>
          <div className="text-[20px] my-[20px] cursor-pointer flex justify-center items-center w-[150px] h-[50px] bg-[#494848] text-white hover:bg-[#706F6F]">
           <NavLink to ="/featured_product"> Shop Now </NavLink>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
