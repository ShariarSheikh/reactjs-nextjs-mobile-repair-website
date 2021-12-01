import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

SwiperCore.use([Pagination]);

const MAX_RATING = 5;
const MIN_RATING = 1;

const GadgetsSlider = ({ gadgets }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        className="mySwiper"
      >
        {gadgets.map((gd) => (
          <SwiperSlide key={gd.id}>
            <div className="h-full w-full bg-white flex flex-col bg-transparent border items-center justify-center p-5">
              <img
                className="bg-white h-52 w-80 object-contain"
                src={gd.photo}
                alt="imgslider"
              />
              <div className=" w-full h-1/5">
                <h1 className="truncate  w-full text-sm text-start font-normal mt-3 text-gray-600 line-clamp-1">
                  {gd.name}
                </h1>
                <p className="text-gray-500 overflow-ellipsis ">
                  <strong> {gd.price}$ </strong>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GadgetsSlider;
