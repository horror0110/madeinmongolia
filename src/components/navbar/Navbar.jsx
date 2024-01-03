import React, { useEffect, useState } from "react";
import Language from "./Language";
import Notification from "./Notification";
import MenuItem from "./MenuItem";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { Box } from "@mui/material";

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
    ? "fixed left-0 w-full z-50 bottomAnimation  top-0   bg-white flex items-center justify-between md:px-20 py-5 px-3"
    : "bg-white  flex items-center topAnimation z-50 w-full justify-between md:px-20 py-5 px-3";

  return (
    <Box className="">
      {!visible && (
        <>
          <Notification />
          <Language />
        </>
      )}
      <Box className={classes}>
        <Box display="flex" gap={3} alignItems="center">
          {/*** burger menu */}
          <Box className="md:hidden">
            <RxHamburgerMenu size={25} />
          </Box>
          {/*** burger menu */}

          {/**** LOGO ***/}
          <Logo />
          {/**** LOGO ***/}
        </Box>

        {/**** SearchBAR */}
        <SearchBar />

        {/**** SearchBAR */}

        {/****  icons */}

        <Box display="flex" alignItems="center" gap={3}>
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
        </Box>

        {/****  icons */}
      </Box>
      <Box display={{ xs: "none", md: "block" }}>
        <MenuItem />
      </Box>
    </Box>
  );
};

export default Navbar;
