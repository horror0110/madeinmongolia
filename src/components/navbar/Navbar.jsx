import React, { useEffect, useState } from "react";
import Language from "./Language";
import Notification from "./Notification";
import MenuItem from "./MenuItem";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

import NavIcons from "./NavIcons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  // scroll animation
  const changeNav = () => {
    if (window.scrollY >= 140) {
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
    ? "fixed left-0 w-full z-50 bottomAnimation z-50  top-0   bg-white flex items-center justify-between px-10 lg:px-20 xl:px-20 2xl:px-60 py-5"
    : "bg-white flex items-center topAnimation z-50 w-full justify-between px-10 lg:px-20 xl:px-20 2xl:px-60 py-5";

  return (
    <div className="">
      {!visible && (
        <>
          <Notification />
          <Language />
        </>
      )}
      <div className={classes}>
        <div className="flex items-center gap-3">
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

        <NavIcons />

        {/****  icons */}
      </div>
      <div className="hidden md:block">
        <MenuItem />
      </div>
    </div>
  );
};

export default Navbar;
