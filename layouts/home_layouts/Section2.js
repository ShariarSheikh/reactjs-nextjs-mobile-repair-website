import React, { useState } from "react";
import { useRouter } from "next/router";
import { allBrands } from "../../products";

const Section2 = () => {
  const [searchBrand, setSearchBrand] = useState("");

  const router = useRouter();

  const searchDevice = () => {
    searchBrand && router.push(`/services/${searchBrand}`);
  };

  return (
    <div
      id="ourServices"
      className="w-full 2xl:max-w-7xl xl:max-w-7xl mt-5 px-6 2xl:px-0 lg:w-full flex-col bg-white m-auto flex 2xl:flex-row items-center shadow-sm rounded-md 2xl:bg-indigo-100"
    >
      {/* left side */}
      <div className="2xl:w-2/4 w-full 2xl:h-96 h-52 relative flex items-center justify-center flex-col self-center">
        <img
          className="absolute top-0 bottom-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
          alt="personRepairing"
        />
        <div className="flex items-center justify-center 4 z-30 w-full px-8">
          <input
            className="outline-none py-4 px-3 rounded-sm text-xl"
            type="text"
            placeholder="Search Your Device"
            value={searchBrand}
            onChange={(e) => setSearchBrand(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white text-xl h-full w-28 rounded-sm"
            onClick={searchDevice}
          >
            Find
          </button>
        </div>
      </div>

      {/* right site  */}
      <div className="w-full 2xl:w-auto 2xl:pl-9 pl-2 py-4 ">
        <h1 className="z-20 text-3xl font-bold mb-4 text ">Brands We Repair</h1>
        <div className="flex flex-row flex-wrap self-center pt-4">
          {allBrands.slice(0, 10).map((brands) => (
            <div
              onClick={() => router.push(`/services/${brands.category}`)}
              key={brands.id}
              className="bg-white ml-4 mb-4 rounded-sm cursor-pointer"
            >
              <img width="100" src={brands.photo} alt="brands" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
