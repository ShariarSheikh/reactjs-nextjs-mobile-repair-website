import React from "react";
import { gadgets } from "../../products";
import GadgetsSlider from "../../utils/GadgetsSlider/GadgetsSlider";

const Section4 = () => {
  return (
    <div className="w-full 2xl:max-w-7xl xl:max-w-7xl px-6 2xl:px-0 lg:w-full m-auto mt-10">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl text-start font-bold mb-5 text-blue-500 flex items-center">
          Gadgets
        </h1>
        <p
          className="text-sm text-gray-700 hover:text-blue-300 cursor-pointer
         ml-5 hover:underline pr-5"
        >
          See all
        </p>
      </div>

      <div className="relative w-full bg-white flex items-center px-3">
        <GadgetsSlider gadgets={gadgets} />
      </div>
    </div>
  );
};

export default Section4;
