import { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  closeGadgets,
  gadgetsModal,
} from "../../redux/gadgetsModalSlice/gadgetsModalSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const GadgetsModal = () => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const { data, modal } = useSelector(gadgetsModal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [modal]);

  return (
    <div
      className={`${
        !modal
          ? "h-[0vh] w-[0px]"
          : "bg-black bg-opacity-20 fixed left-0 top-0 h-[100vh] w-full z-50"
      }  overflow-hidden`}
    >
      <div
        className={`w-full ${
          modal ? "h-[85vh] mt-[15vh]" : "h-[0vh] mt-[100vh]"
        } bg-white px-10 relative transition-all duration-200 ease-out overflow-y-scroll pb-4`}
      >
        <div className="w-full flex justify-end h-9 items-center pr-3 mt-3">
          <AiOutlineClose
            onClick={() => dispatch(closeGadgets())}
            className="w-6 h-6 cursor-pointer text-gray-500 active:scale-105 duration-200 mt-4"
          />
        </div>

        {data && (
          <div className="w-full max-w-5xl m-auto flex flex-col md:flex-row">
            <div className="min-w-[300px] h-[300px] relative md:border-r border-gray-200">
              {data?.photo && (
                <Image src={data?.photo} alt="gadgets" layout="fill" />
              )}
            </div>
            <div className="min-w-[300px] w-full md:px-5 h-auto md:ml-4 mt-3 md:mt-0">
              <h1 className="font-semibold text-xl md:text-2xl text-gray-600">
                {data?.name}
              </h1>
              <p className="text-gray-500 overflow-ellipsis mt-3">
                <strong> {data?.price}$ </strong>
              </p>
              <div className="flex mt-2">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <AiFillStar key={i} className="text-yellow-400" />
                  ))}
              </div>
              <h1 className="py-3 mt-10 font-bold text-2xl md:text-3xl">
                What is Gadgets?
              </h1>
              <p className="text-gray-500 text-lg">
                The definition of a gadget is a small, unique-use mechanical or
                electronic device. An example of a gadget is a lime squeezer.
                ... Synonymous with gizmo. Smartphones, tablets and portable
                game and music players are sometimes placed in the gadget
                category. See fondleslab.
              </p>
              <button className="bg-yellow-400 mt-5 h-10 hover:bg-yellow-300 active:scale-105 duration-200 rounded-md overflow-hidden text-center font-medium w-full">
                Buy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GadgetsModal;
