import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import HeaderRight from "./components/HeaderRight.js";
import HeaderLeft from "./components/HeaderLeft.js";
import HeaderCenter from "./components/HeaderCenter.js";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  //check if route change
  useEffect(() => {
    setOpenMenu(false);
    const handleResize = () => {
      const { innerWidth: width } = window;
      if (width >= 1280) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, [router.pathname]);

  return (
    <nav className="z-50 w-full h-[70px] bg-[#f5f5dc] sticky top-0">
      <div className="w-full max-w-[1440px] m-auto 3xl:px-0 px-5 relative h-full flex justify-between flex-row items-center">
        <HeaderLeft
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          router={router}
        />
        <HeaderCenter />
        <HeaderRight />
      </div>
      <HamburgerMenu openMenu={openMenu} />
    </nav>
  );
};

export default Header;
