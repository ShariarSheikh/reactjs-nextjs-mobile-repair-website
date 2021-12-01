import React from "react";
import { ReviewSlider } from "../../utils/ReviewSlider/ReviewSlider";

const Section6 = () => {
  return (
    <div className="w-full 2xl:max-w-7xl xl:max-w-7xl xl:mt-7 lg:w-full m-auto bg-[#f5f5dc] pt-4 pl-3 mb-10 pb-7">
      <h1 className="text-2xl text-start font-bold mb-5 text-blue-500">
        Reviews
      </h1>
      <div className="relative w-full h-full">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Section6;
