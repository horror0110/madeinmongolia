import React, { useEffect, useState } from "react";
import Language from "../Language";
import Notification from "../Notification";
import MenuItem from "./MenuItem";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 180) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const classes = visible
    ? "fixed left-0 w-full z-50 top-0 transition ease-in-out delay-150 duration-500  bg-white flex items-center justify-between md:px-20 py-5 px-3"
    : "bg-white  flex items-center transition ease-in-out delay-150 duration-500   z-50 w-full justify-between md:px-20 py-5 px-3";

  return (
    <div className="">
      {!visible && (
        <>
          <Notification />
          <Language />
        </>
      )}
      <div className={classes}>
        <div className="flex gap-3 items-center ">
          {/*** burger menu */}
          <div className="md:hidden">
            <RxHamburgerMenu size={25} />
          </div>
          {/*** burger menu */}

          {/**** LOGO ***/}
          <Logo />
          {/**** LOGO ***/}
        </div>

        {/**** SearchBAR */}
        <SearchBar />

        {/**** SearchBAR */}

        {/****  icons */}

        <div className="flex items-center gap-3">
          <img
            src="https://madeinmongolia.asia/assets/frontend/images/icons/compare_icon.gif"
            alt=""
            width={26}
            height={26}
            className="hidden md:block"
          />
          <img
            src="https://madeinmongolia.asia/assets/frontend/images/icons/wishlist_icon.gif"
            alt=""
            width={26}
            height={26}
            className="hidden md:block"
          />
          <img
            src="https://madeinmongolia.asia/assets/frontend/images/icons/shoppingcart_icon.gif"
            alt=""
            width={26}
            height={26}
          />
          <img
            src="https://madeinmongolia.asia/assets/frontend/images/icons/profile_icon.gif"
            alt=""
            width={26}
            height={26}
            className="hidden md:block"
          />
        </div>

        {/****  icons */}
      </div>
      <div className="hidden md:block">
        <MenuItem />
      </div>
    </div>
  );
};

export default Navbar;
