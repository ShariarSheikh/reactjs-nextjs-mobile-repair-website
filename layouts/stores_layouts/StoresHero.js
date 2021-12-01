import React, { useState } from "react";
import { useRouter } from "next/router";

const StoresHero = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const searchHandler = () => {
    search && router.push(`/search-store?store=${search}`);
  };
  return (
    <header className="nav_bg w-full">
      <div className="flex flex-row justify-between max-w-7xl m-auto">
        <div className="p-10 mt-10">
          <h1 className="text-5xl font-bold text-black mb-4">
            Find your stores <br /> In your location
          </h1>
          <p className="text-black font-medium">
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum <br /> dolor sit
            amet, consectetur
          </p>
          <div className="flex items-center mt-6">
            <input
              type="text"
              placeholder="Search your location"
              className="mr-5 pl-2 border-b mt-3 pb-2 pt-2 outline-none text-gray-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="mt-3 pr-5 pl-5 pt-2 pb-2 bg-indigo-600 text-white rounded "
              onClick={searchHandler}
            >
              Find
            </button>
          </div>
        </div>
        {/* location container start */}
        <div className="relative flex h-full items-center justify-center ml-20">
          <div className="hidden sm:block w-full h-full">
            <img
              className="object-contain max-w-md w-full h-80 mt-5"
              src="images/findLocation.svg"
              alt="find locations"
            />
          </div>
        </div>
        {/* location container end */}
      </div>
    </header>
  );
};


export default StoresHero;
