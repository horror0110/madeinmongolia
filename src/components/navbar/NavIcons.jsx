import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import data from "../../utils/product.json";
import { IoIosClose } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FiCornerDownRight } from "react-icons/fi";
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";

const NavIcons = () => {
  const [openBasket, setOpenBasket] = useState(false);

  const { userInfo, basket } = useContext(GlobalContext);

  const [totalCartCount, setTotalCartCount] = useState(basket.length);

  const toggleBasketDropdown = () => {
    setOpenBasket((openBasket) => !openBasket);
  };

  // DROPDOWNIIG HAANA C DARSAN HAAH

  const basketEmpty = true;
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenBasket(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

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
          1
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
      <div ref={dropdownRef} className="relative">
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

        {openBasket && (
          <div className="absolute bg-white w-[350px] shadow rounded-md top-8 py-4 px-5 border text-opacityColor border-gray-200 right-0 z-20 text-center">
            {basketEmpty ? (
              <div>
                <h1 className="font-semibold">Таны сагс хоосон байна</h1>
                <img
                  src="https://madeinmongolia.asia/assets/frontend/images/not_found.gif"
                  alt=""
                />
              </div>
            ) : (
              <div>
                <div className="flex items-center  gap-16 justify-end">
                  <h1 className="font-bold text-opacityColor text-center">
                    Таны сагс
                  </h1>

                  <button className="text-white bg-[#00b293] text-[10px] px-2 py-1 rounded-full">
                    Хоослох
                  </button>
                </div>

                <div className="flex justify-between items-center gap-5 mt-4">
                  <div className="flex items-center gap-5">
                    <img
                      src={data[0].image[0]}
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-md"
                    />

                    <div className="flex flex-col items-start">
                      <h1 className="text-[14.4px] text-opacityColor font-semibold">
                        {data[0].title}
                      </h1>
                      <div className="text-opacityGray text-[12.8px] ">
                        Тоо ширхэг: 1
                      </div>
                      <div className="text-opacityGray text-[12.8px]">
                        Нийт үнэ: 500
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-300 rounded-full w-max">
                    <IoIosClose size={20} />
                  </div>
                </div>

                <div className="text-[14.4px] text-[rgb(52, 58, 64)] text-start my-5">
                  Нийт:500
                </div>

                <div className="flex items-center gap-2 justify-center">
                  <div className="flex items-center gap-1 rounded-full px-5 text-[13px] py-1 bg-mainColor w-max text-white">
                    <FiShoppingCart size={16} />
                    Сагс харах
                  </div>
                  <div className="flex gap-1 items-center rounded-full text-[13px] px-5 py-1 bg-mainColor w-max text-white">
                    <FiCornerDownRight size={16} />
                    Тооцоо хийх
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {/*** basket ***/}

      <img
        src="https://madeinmongolia.asia/assets/frontend/images/icons/profile_icon.gif"
        alt=""
        width={26}
        height={26}
        className="hidden md:block"
      />
    </div>
  );
};

export default NavIcons;
