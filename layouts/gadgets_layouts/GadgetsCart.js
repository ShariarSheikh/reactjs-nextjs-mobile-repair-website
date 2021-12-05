import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openGadgets } from "../../redux/gadgetsModalSlice/gadgetsModalSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const GadgetsCart = ({ data }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(openGadgets(data))}
      className="cursor-pointer m-3 h-full w-[98%] sm:w-[46%] bg-white flex flex-col bg-transparent border items-center justify-center p-5"
    >
      <Image
        className="bg-white h-52 w-80 object-contain"
        width={320}
        height={208}
        src={data.photo}
        alt="imgslider"
      />
      <div className=" w-full h-1/5">
        <h1 className="truncate  w-full text-sm text-start font-normal mt-3 text-gray-600 line-clamp-1">
          {data.name}
        </h1>
        <p className="text-gray-500 overflow-ellipsis ">
          <strong> {data.price}$ </strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <AiFillStar key={i} className="text-yellow-400" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default GadgetsCart;
