import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const HeaderLeft = ({ openMenu, setOpenMenu }) => {
  return (
    <div className="flex items-center h-full px-2 3xl:px-0">
      {/* menu HamburgerMenu icon on mobile device */}
      <div
        className="xl:hidden text-red-500"
        onClick={() => setOpenMenu((prevState) => !prevState)}
      >
        {openMenu ? (
          <AiOutlineClose className="text-black w-6 h-6" />
        ) : (
          <AiOutlineMenu className="text-black w-6 h-6" />
        )}
      </div>
      <div className="relative flex flex-row items-center h-full cursor-pointer">
        <h1 className="text-xl font-bold text-black ml-6 xl:ml-0">
          <Link href="/" passHref>
            <a>MobileR</a>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default HeaderLeft;
