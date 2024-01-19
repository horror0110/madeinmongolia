import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BasketSidebar from "../sidebars/BasketSidebar";
import Shadow from "../../components/navbar/Shadow";
import UserSidebar from "../sidebars/UserSidebar";

const NavIcons = () => {
  const navigate = useNavigate();
  const { userInfo, cycleOpen, basket, openCycle, cycleOpen2, openCycle2 } =
    useContext(GlobalContext);

  const [totalCartCount, setTotalCartCount] = useState(basket.length);

  // realtime render
  useEffect(() => {
    setTotalCartCount(basket.length);
  }, [basket]);

  const handleProfile = () => {
    if (!userInfo) {
      navigate("/users/login");
    } else {
      cycleOpen2();
    }
  };
  return (
    <>
      <div className={`flex items-center gap-3 cursor-pointer z-0`}>
        {userInfo && (
          <div className="relative">
            <div className="absolute text-xs bg-mainColor text-white rounded-full px-1 right-[-5px] top-[-5px]">
              1
            </div>
            <img
              src="https://madeinmongolia.asia/assets/frontend/images/icons/notification_icon.gif"
              alt=""
              width={26}
              height={26}
              className="hidden md:block"
            />
          </div>
        )}
        <div className="tooltip tooltip-left" data-tip="Харьцуулах">
          <img
            src="https://madeinmongolia.asia/assets/frontend/images/icons/compare_icon.gif"
            alt=""
            width={26}
            height={26}
            className="hidden md:block "
          />
        </div>
        <div className="relative tooltip tooltip-left" data-tip="Хадгалсан">
          <div className="absolute text-xs bg-mainColor text-white rounded-full px-1 right-[-5px] top-[-5px]">
            0
          </div>
          <img
            src="https://madeinmongolia.asia/assets/frontend/images/icons/wishlist_icon.gif"
            alt=""
            width={26}
            height={26}
            className="hidden md:block"
          />
        </div>

        {/*** basket ***/}
        <div onClick={cycleOpen} className="relative">
          <Link className="relative">
            <div className="absolute text-xs bg-mainColor text-white rounded-full px-1 right-[-5px] top-[-5px]">
              {totalCartCount}
            </div>
            <img
              src="https://madeinmongolia.asia/assets/frontend/images/icons/shoppingcart_icon.gif"
              alt=""
              width={26}
              height={26}
            />
          </Link>
        </div>

        {/*** basket ***/}
        <div
          onClick={handleProfile}
          data-tip={!userInfo ? "Нэвтрэх" : null}
          className="hidden md:block tooltip tooltip-left cursor-pointer"
        >
          <img
            src="https://madeinmongolia.asia/assets/frontend/images/icons/profile_icon.gif"
            alt=""
            width={26}
            height={26}
            className=""
          />
        </div>
      </div>

      <BasketSidebar />

      <UserSidebar />

      {openCycle2 && <Shadow setOpen={cycleOpen2} />}

      {openCycle && <Shadow setOpen={cycleOpen} />}
    </>
  );
};

export default NavIcons;
