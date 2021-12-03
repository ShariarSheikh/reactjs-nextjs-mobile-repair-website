import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { totalServicesList } from "../../products";
import { logOutUser } from "../../redux/userSlice/userSlice";

export const DropdownServices = ({ setDropdown }) => {
  return (
    <>
      <div className="z-50 absolute max-w-[1366px] top-11 mt-6 left-0 rounded bg-[#f0f8ff] w-full ">
        <div className="w-full flex flex-row justify-start flex-wrap items-center rounded">
          {totalServicesList.map((service) => (
            <Link
              href={
                service.category === "all"
                  ? `/services`
                  : `/services/` + service.category
              }
              key={service.id}
              passHref
            >
              <div
                className="flex flex-col items-center justify-center w-64 h-full p-6 relative hover:bg-white"
                onClick={() => setDropdown((prevState) => !prevState)}
              >
                <div className="cursor-pointer">
                  <h2 className="text-black text-3xl mb-4 border-b border-gray-600 pb-3">
                    {service.device}
                  </h2>
                  <p className="truncate mt-2 text-black">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export const DropdownProfileMenu = ({ img,name }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    isOpenMenu && menuRef.current.focus();
  }, [isOpenMenu]);

  const clickHandler = (text) => {
    text === "Profile" && router.push("/profile");
    text === "Setting" && router.push("/profile/setting");
    text === "Logout" && dispatch(logOutUser());

    setIsOpenMenu(false);
  };
  return (
    <div
      className="text-black relative z-50 "
      onClick={() => setIsOpenMenu(!isOpenMenu)}
      ref={menuRef}
      onBlur={() => setIsOpenMenu(false)}
      tabIndex={0}
    >
      {img ? (
        <Image
          width={40}
          height={40}
          className="inline object-cover mr-2 rounded-full overflow-hidden"
          src={img}
          alt="Profile"
        />
      ) : (
        <div className="bg-blue-400 w-10 h-10 mr-2 rounded-full overflow-hidden text-white font-semibold flex justify-center items-center">
          {name[0]}
        </div>
      )}

      <ul
        className="w-52 rounded-sm text-black absolute right-0 top-10 shadow-lg bg-white pt-2 px-3"
        hidden={!isOpenMenu}
        onClick={(e) => e.stopPropagation()}
      >
        <li className="mb-3" onClick={() => clickHandler("Profile")}>
          Profile
        </li>
        <li className="mb-3" onClick={() => clickHandler("Setting")}>
          Setting
        </li>
        <li className="mb-3" onClick={() => clickHandler("Logout")}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export const DropdownCart = ({ AiOutlineShoppingCart }) => {
  const router = useRouter();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    isOpenMenu && menuRef.current.focus();
  }, [isOpenMenu]);

  const clickHandler = (text) => {
    router.push("/gadgets/tools");
    setIsOpenMenu(false);
  };
  return (
    <div
      className="text-white relative z-50"
      onClick={() => setIsOpenMenu(!isOpenMenu)}
      ref={menuRef}
      onBlur={() => setIsOpenMenu(false)}
      tabIndex={0}
    >
      <AiOutlineShoppingCart className="text-black mr-4 text-2xl cursor-pointer" />
      <div
        className="w-72 h-52  rounded-sm text-black absolute right-0 top-8 shadow-xl bg-white pt-2 px-3"
        hidden={!isOpenMenu}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full flex items-center justify-center flex-col">
          <p>Looks like your cart is empty</p>
          <h4
            className="text-indigo-500 mt-8 cursor-pointer"
            onClick={clickHandler}
          >
            Browse our store
          </h4>
        </div>
      </div>
    </div>
  );
};
