import { useState } from "react";
import { AiFillStar, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useHistory } from "react-router";

export const StoreCart = ({ location }) => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push(`/store/${location.locationName}`)}
      key={location._id}
      className="relative bg-blue-500 shadow-md pb-3 sm:w-2/5 max-w-sm w-11/12 sm:mr-4 mb-6 cursor-pointer rounded"
    >
      <img className="w-full h-52" src={location.photo} alt="locations" />
      <div className="pl-3">
        <h1 className="text-white text-3xl mt-3">{location.locationName}</h1>
        <p className="text-gray-200  mt-2 font-normal">
          {location.description}
        </p>
      </div>
    </div>
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
    <div className="w-full h-full overflow-hidden bg-white flex justify-start flex-col p-8 rounded cursor-pointer">
      <div className="flex flex-row mb-4">
        <img
          className="w-14 h-14 object-cover rounded-full bg-white border mr-4"
          src={userReviews.photo}
          alt="reviews"
        />
        <div className="flex flex-col">
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
        <p className="text-gray-500 font-sm line-clamp-4">
          {userReviews.description}
        </p>
        <small className="text-gray-500 font-sm">{userReviews.posted}</small>
      </div>
      <div className=" w-full flex flex-row absolute bottom-10 2xl:bottom-5">
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
