import { useEffect, useRef, useState } from "react";

export const DeleteDeviceModel = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
      isOpenMenu && menuRef.current.focus();
    }, [isOpenMenu]);
   
  
    const clickHandler = () => {
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
        <h2 onClick={() => clickHandler()}>hello world</h2>
      </div>
    );
  };