import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";

import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

const NavIcons = () => {
  const [openBasket, setOpenBasket] = useState(false);


  const navigate = useNavigate();
  const { userInfo, basket } = useContext(GlobalContext);

  const [totalCartCount, setTotalCartCount] = useState(basket.length);

  const toggleBasketDropdown = () => {
    setOpenBasket((openBasket) => !openBasket);
  };

  //realtime render

  useEffect(() => {
    setTotalCartCount(basket.length);
  }, [basket]);
  return (
    <div className="flex items-center gap-3 cursor-pointer">
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
      <div className="relative">
        <Link to="/cart" className="relative">
          <div className="absolute text-xs bg-mainColor text-white rounded-full px-1 right-[-5px] top-[-5px]">
            {totalCartCount}
          </div>
          <img
            onClick={toggleBasketDropdown}
            src="https://madeinmongolia.asia/assets/frontend/images/icons/shoppingcart_icon.gif"
            alt=""
            width={26}
            height={26}
          />
        </Link>
      </div>

      {/*** basket ***/}
      <div
       onClick={()=> navigate("/users/login")}
        data-tip="Нэвтрэх"
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
  );
};

export default NavIcons;
