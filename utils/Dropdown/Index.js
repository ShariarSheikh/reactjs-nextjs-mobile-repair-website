import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { totalServicesList } from "../../products";

export const DropdownServices = ({ setDropdown }) => {
  return (
    <>
      <div className="z-50 absolute max-w-[1366px] top-11 mt-6 left-0 rounded bg-[#f0f8ff] w-full ">
        <div className="w-full flex flex-row justify-start flex-wrap items-center rounded">
          {totalServicesList.map((service) => (
            <Link
              href={
                service.category === "tools"
                  ? `/gadgets`
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

export const DropdownProfileMenu = ({ img }) => {
  const { user } = useSelector((state) => state.user);

  const router = useRouter();
  const dispatch = useDispatch();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    isOpenMenu && menuRef.current.focus();
  }, [isOpenMenu]);

  const clickHandler = (text) => {
    if (process.env.REACT_APP_ADMIN_EMAIL === user?.email) {
      //admin login
      text === "Profile" && router.push("/admin");
      text === "Setting" && router.push("/admin/setting");
      text === "Logout" && dispatch(removeUser());
      text === "Logout" && router.push("/");
    } else if (user?.isAdmin === false) {
      //if normal user login
      text === "Profile" && router.push("/user");
      text === "Setting" && router.push("/user/setting");
      text === "Logout" && dispatch(removeUser());
      text === "Logout" && router.push("/");
    } else if (user?.email) {
      text === "Profile" && router.push("/user");
      text === "Setting" && router.push("/user/setting");
      text === "Logout" && dispatch(removeUser());
      text === "Logout" && router.push("/");
    }
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
      <img
        className="inline object-cover w-10 h-10 mr-2 rounded-full"
        src={img}
        alt="Profile"
      />
      <ul
        className="w-52 rounded-sm text-black absolute right-0 top-14 shadow-lg bg-white pt-2 px-3"
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
        className="w-72 h-52  rounded-sm text-black absolute right-0 top-14 shadow-xl bg-white pt-2 px-3"
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
