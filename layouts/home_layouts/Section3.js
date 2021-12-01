import React from "react";

const totalServicesList = [
  {
    id: 1,
    title: "All Brands & Models",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Skilled Technicians",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    title: "Data Security",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    title: "Genuine Parts",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    title: "1 Day Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    id: 6,
    title: "90 Days Warranty",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

const Section3 = () => {
  return (
    <div className="w-full 2xl:max-w-7xl xl:max-w-7xl px-6 2xl:px-0 lg:w-full m-auto mt-10 flex flex-col items-start">
      <h1 className="text-2xl text-start font-bold mb-5 text-blue-500">
        Services
      </h1>
      <div className="w-full flex flex-row justify-start flex-wrap">
        {totalServicesList.map((sr) => (
          <div
            key={sr.id}
            className="p-5 shadow-md max-w-md sm:w-1/3  w-full mb-5 hover:shadow-sm"
          >
            <div>
              <p className="text-start text-gray-800  text-xl mb-2 font-medium ">
                {sr.title}
              </p>
              <p className="text-start text-gray-800 font-normal">
                {sr.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
