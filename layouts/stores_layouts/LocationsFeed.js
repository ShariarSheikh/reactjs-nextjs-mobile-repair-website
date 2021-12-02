import React from "react";
import { StoreCart } from "../../utils/Carts/Index";

const LocationsFeed = ({ data }) => {

  return (
    <div className="max-w-7xl m-auto w-full flex justify-center items-center">
      <div className="mt-16 flex flex-wrap justify-center xl:justify-start xl:ml-10">
        {data?.map((x) => (
          <StoreCart key={x._id} location={x} />
        ))}
      </div>
    </div>
  );
};

export default LocationsFeed;
