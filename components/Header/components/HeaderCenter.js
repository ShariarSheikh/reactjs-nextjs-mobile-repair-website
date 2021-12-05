import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { DropdownServices } from "../../../utils/Dropdown/Index";

const HeaderCenter = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="hidden xl:block h-full max-w-[500px] m-auto">
      <ul className="p-0 flex flex-row h-full items-center w-full ">
        <Link href="/stores" passHref>
          <li className="font-medium mr-5 text-base text-black cursor-pointer">
            Stores
          </li>
        </Link>
        <div
          className="h-full"
          onMouseEnter={() => setDropdown((prevState) => !prevState)}
          onMouseLeave={() => setDropdown((prevState) => !prevState)}
        >
          <li className="h-full pl-2 font-medium mr-5 text-base text-black cursor-pointer flex flex-row items-center">
            Services
            <div>
              <RiArrowDropDownFill className="text-black mt-1 text-xl" />
            </div>
          </li>
          {dropdown && <DropdownServices setDropdown={setDropdown} />}
        </div>
        <Link href="/gadgets" passHref>
          <li className="font-medium mr-5 text-base text-black cursor-pointer">
            Gadgets
          </li>
        </Link>
        <Link href="/aboutus" passHref>
          <li className="font-medium mr-5 text-base text-black cursor-pointer">
            About Us
          </li>
        </Link>
        <Link href="/contactus" passHref>
          <li className="font-medium mr-5 text-base text-black cursor-pointer">
            Contact Us
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default HeaderCenter;
