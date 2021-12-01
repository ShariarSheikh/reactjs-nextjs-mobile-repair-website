import React from "react";
import { StoreCart } from "../../utils/Carts/Index";

const LocationsFeed = ({ data }) => {
  return (
    <div className="max-w-7xl m-auto w-full">
      <div className="mt-16 w-full flex flex-wrap justify-center">
        {data?.map((x) => (
          <StoreCart key={x._id} location={x} />
        ))}
      </div>
    </div>
  );
};

export default LocationsFeed;
