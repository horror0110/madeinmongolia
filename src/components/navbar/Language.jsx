import React, { useContext, useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Language = () => {
  const { userInfo, setUserInfo , handleLogout } = useContext(GlobalContext);
  const langs = [
    {
      id: 1,
      title: "Монгол",
      icon: "https://madeinmongolia.asia/assets/frontend/images/icons/flags/mn.png",
    },
    {
      id: 2,
      title: "English",
      icon: "https://madeinmongolia.asia/assets/frontend/images/icons/flags/en.png",
    },
    {
      id: 1,
      title: "Chinese",
      icon: "https://madeinmongolia.asia/assets/frontend/images/icons/flags/cn.png",
    },
  ];

  const [open, setOpen] = useState(false);


  const [clickedItems, setClickedItems] = useState({
    title: langs[0].title,
    icon: langs[0].icon,
  });

  // DROPDOWNIIG HAANA C DARSAN HAAH

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="bg-mainColor h-9 w-full text-white px-10 lg:px-20 xl:px-20 2xl:px-60 text-xs flex items-center justify-between">
      <div className="flex items-center gap-5 md:justify-normal justify-between">
        {/**********/}

        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setOpen((open) => !open)}
            className="flex items-center gap-1 cursor-pointer"
          >
            <img src={clickedItems.icon} alt="" />
            <div>{clickedItems.title}</div>
            <FaCaretDown />
          </div>
          {open && (
            <div className="absolute top-6 flex flex-col w-[200px] gap-3 shadow z-10 bg-white text-black py-2 px-3">
              {langs.map((lang, index) => (
                <div
                  key={lang.id}
                  onClick={() => {
                    setClickedItems((prev) => ({
                      ...prev,
                      title: lang.title,
                      icon: lang.icon,
                    })),
                      setOpen(false);
                  }}
                  className="flex items-center gap-1 text-gray-400 text-[13px] cursor-pointer"
                >
                  <img src={lang.icon} alt="" /> {lang.title}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dropdown">
          <Link to="" className=" text-white flex items-center gap-1">
            Монгол төгрөг ₮ <FaCaretDown />
          </Link>
          <ul className=" menu  px-0 py-1 dropdown-content bg-white text-gray-700 w-52">
            <li>
              <button className="text-xs bg-gray-300 rounded-none">
                Монгол төгрөг (₮)
              </button>
            </li>
          </ul>
        </div>
        {/**********/}
      </div>

      <div className=" gap-3 hidden md:flex">
        <Link to="/about">Бидний тухай</Link>
        <Link to="/track_your_order">Захиалга шалгах</Link>
        {userInfo && (
          <Link onClick={handleLogout} to="/">
            Гарах
          </Link>
        )}
      </div>
    </div>
  );
};

export default Language;
