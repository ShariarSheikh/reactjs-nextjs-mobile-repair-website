import React from "react";


const Section1 = () => {
  return (
    <div id="bg_img" className="relative w-full pb-7 xl:pb-0 bg-[#f5f5dc]">
      <div className="w-full xl:max-w-7xl lg:w-full m-auto flex flex-col sm:flex-row-reverse justify-around sm:py-8 lg:py-0">
        {/* img component */}
        <div className="relative overflow-hidden sm:w-2/5 xl:w-2/6 w-full  m-auto flex justify-center items-center">
          <div id="img_bounce" className="w-full">
            <img className="w-full h-full" src="images/headerBg.png" alt="headerBg" />
          </div>
        </div>
        {/* text component */}
        <div className="lg:w-3/5 sm:w-6/12 relative w-full flex 3xl:items-start justify-center items-center flex-col px-4">
          <div>
            <h1 className="text-black xl:text-5xl text-4xl font-bold">
              We are the largest mobile
              <br className="hidden"/> repairing team in
              <br className="hidden"/> Bangladesh
            </h1>
            <p className="text-black lg:text-lg text-sm  mt-9 font-normal">
              It is a long established fact that a reader <br className="sm:block hidden"/> will be
              distracted by the readable content of.
            </p>
            <button className="border border-indigo-600 text-black font-medium mt-6 pr-6 pl-6 pt-3 pb-3 rounded outline-none">
              <a href="#ourServices">Ours Services</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
