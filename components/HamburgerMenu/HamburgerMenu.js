import React, { useEffect, useState } from "react";
import { AiOutlineBell, AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/router";
import { totalServicesList } from "../../products";
import { DropdownCart, DropdownProfileMenu } from "../../utils/Dropdown/Index";
import { useDispatch } from "react-redux";
import { modalLogin, modalSignup } from "../../redux/userSlice/userSlice";

const HamburgerMenu = ({ openMenu }) => {
  const [openService, setOpenService] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  const handleLink = (text) => {
    if (text === "services") {
      setOpenService((prevState) => !prevState);
    } else {
      router.push(`/${text}`);
    }
  };

  return (
    <div
      className={`relative w-full nav_bg ${
        openMenu ? `min-h-screen h-auto block` : `h-0 hidden`
      } z-50 transition delay-150 duration-300 ease-in-out bg-white`}
    >
      <div
        className={`relative w-full overflow-y-scroll ${
          openMenu ? `h-screen` : `h-0 `
        } z-50 transition delay-150 duration-300 ease-in-out`}
      >
        <ul className="w-full h-auto p-0 mt-16 text-center">
          <div className="w-full flex flex-row items-center justify-center mb-8">
            {false && (
              <>
                <div className="cursor-pointer flex flex-row items-center text-black font-medium rounded ">
                  <AiOutlineBell className="text-black mr-6 w-6 h-6 cursor-pointer text-lg" />
                </div>
                {/* shopping cart icon */}
                <div>
                  <DropdownCart AiOutlineShoppingCart={AiOutlineShoppingCart} />
                </div>
                <div className="ml-6 cursor-pointer flex flex-row items-center">
                  <DropdownProfileMenu
                    img={
                      "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    }
                  />
                </div>
              </>
            )}
          </div>

          <li
            className="text-3xl cursor-pointer mb-6 text-black uppercase font-semibold font-roboto"
            onClick={() => handleLink("stores")}
          >
            Stores
          </li>
          <li
            className="text-3xl cursor-pointer mb-6 text-black uppercase font-semibold font-roboto"
            onClick={() => handleLink("services")}
          >
            Services
          </li>
          <ServiceList openService={openService} />
          <li
            className="text-3xl cursor-pointer mb-6 text-black uppercase font-semibold font-roboto"
            onClick={() => handleLink("gadgets")}
          >
            Gadgets
          </li>
          <li
            className="text-3xl cursor-pointer mb-6 text-black uppercase font-semibold font-roboto"
            onClick={() => handleLink("aboutus")}
          >
            About Us
          </li>
          <li
            className="text-3xl cursor-pointer mb-6 text-black uppercase font-semibold font-roboto"
            onClick={() => handleLink("contactus")}
          >
            Contact Us
          </li>

          {!false && (
            <>
              <div
                onClick={() => dispatch(modalLogin())}
                className="cursor-pointer  text-3xl text-black rounded uppercase font-semibold font-roboto mb-6"
              >
                LogIn
              </div>
              <div
                onClick={() => dispatch(modalSignup())}
                className=" cursor-pointer text-3xl text-black uppercase font-semibold font-roboto"
              >
                Register
              </div>
            </>
          )}

          <li className="relative top-10">
            <p className="text-black pb-5 text-base">
              Copyright © <b>Dev.S</b>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;

const ServiceList = ({ openService }) => {
  const router = useRouter();

  return (
    <ul
      className={`w-full bg-gray-100 transition transform duration-200 overflow-hidden ${
        openService ? "h-auto" : "h-0"
      }`}
    >
      {totalServicesList.map(({ id, device, category }) => (
        <li
          onClick={() =>
            router.push(
              `${category === "tools" ? `/gadgets` : `/services/${category}`}`
            )
          }
          className="text-black text-xl font-roboto mb-2 py-3 cursor-pointer uppercase"
          key={id}
        >
          {device}
        </li>
      ))}
    </ul>
  );
};
