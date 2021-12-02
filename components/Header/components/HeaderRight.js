import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import {
  AiOutlineBell,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  joinModal,
  modalLogin,
  modalSignup,
} from "../../../redux/userSlice/userSlice";
import {
  DropdownCart,
  DropdownProfileMenu,
} from "../../../utils/Dropdown/Index";

const cookies = new Cookies();

//header right component
const HeaderRight = () => {
  const loginUser = useSelector(joinModal);
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const storeSearch = (e) => {
    if (e.keyCode === 13) {
      search && router.push(`/stores?store=${search}`);
    }
  };

  useEffect(() => {
    setUser(cookies.get("u"));
  }, [loginUser]);

  return (
    <div className="h-full w-full xl:w-auto">
      <div className="relative h-full flex flex-row justify-end items-center w-full">
        {/* search box */}
        <div className="hidden md:block w-full mr-4">
          <div className="relative xl:w-80 flex flex-row items-center bg-white rounded-2xl w-full">
            <AiOutlineSearch className="absolute right-0 mr-4 text-black text-xl cursor-pointer" />
            <input
              className="pl-5 ml-4 w-full bg-transparent pt-2 pb-2 focus:outline-none text-black text-sm"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => storeSearch(e)}
              placeholder="Search Your Store"
            />
          </div>
        </div>

        {/* shopping cart icon */}
        <div>
          <DropdownCart AiOutlineShoppingCart={AiOutlineShoppingCart} />
        </div>

        {user?.email ? (
          <>
            <div className="cursor-pointer flex flex-row items-center text-black font-medium rounded">
              <AiOutlineBell className="text-black mr-1 w-6 h-6 cursor-pointer text-lg" />
            </div>
            <div className="ml-4 cursor-pointer flex flex-row items-center">
              <DropdownProfileMenu
                img={user?.profileImg}
                email={user?.email}
                isAdmin={user?.isAdmin}
                name={user?.name}
              />
            </div>
          </>
        ) : (
          <>
            <div
              onClick={() => dispatch(modalLogin())}
              className="cursor-pointer flex flex-row items-center text-black font-medium rounded"
            >
              LogIn
            </div>
            <div
              onClick={() => dispatch(modalSignup())}
              className="ml-4 cursor-pointer flex flex-row items-center text-black font-medium rounded outline-none"
            >
              Register
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderRight;
