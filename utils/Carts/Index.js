import Link from "next/link";
import { useState } from "react";
import { AiFillStar, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import Image from "next/image";

export const StoreCart = ({ location }) => {
  return (
    <Link href={`/store/${location._id}`} passHref>
      <div
        key={location._id}
        className="relative bg-blue-500 shadow-md pb-3 sm:w-2/5 max-w-sm w-11/12 sm:mr-4 mb-6 cursor-pointer rounded p-6"
      >
        <div className="w-full h-52 relative">
          <Image
            className="w-full"
            layout="fill"
            src={location.photo}
            alt="locations"
          />
        </div>

        <div className="pl-3">
          <h1 className="text-white text-3xl mt-3">{location.locationName}</h1>
          <p className="text-gray-200  mt-2 font-normal">
            {location.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

//user slider cart
export const ReviewSliderCart = ({ userReviews }) => {
  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [like, setLike] = useState(15);
  const [dislike, setDislike] = useState(3);

  return (
    <div className="w-full h-full min-h-[308px] overflow-hidden bg-white flex justify-between flex-col p-8 rounded cursor-pointer">
      <div className="flex flex-row pb-4">
        <Image
          className="object-cover rounded-full bg-white border relative"
          src={userReviews.photo}
          width={54}
          height={54}
          alt="reviews"
        />
        <div className="flex flex-col ml-5">
          <h1 className="text-gray-500 font-bold mb-2">{userReviews.name}</h1>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <AiFillStar key={i} className="text-yellow-400" />
              ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-gray-500 font-medium mb-2">{userReviews.title}</h1>
        <p className="text-gray-500 font-sm line-clamp-3">
          {userReviews.description}
        </p>
        <small className="text-gray-500 font-sm">{userReviews.posted}</small>
      </div>
      <div className=" w-full flex flex-row mt-5">
        <div className="flex items-center">
          <AiOutlineLike
            className="text-gray-400 text-2xl z-50 hover:text-gray-700"
            onClick={() => setLike(like + 1)}
          />
          <p className="text-gray-400"> {like} </p>
        </div>
        <div className="flex items-center">
          <AiOutlineDislike
            className="text-gray-400 ml-5 text-2xl z-50 hover:text-gray-700"
            onClick={() => setDislike(dislike + 1)}
          />
          <p className="text-gray-400"> {dislike} </p>
        </div>
      </div>
    </div>
  );
};
