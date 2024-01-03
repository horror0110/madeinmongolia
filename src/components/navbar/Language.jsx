import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Language = () => {
  return (
    <div className="bg-mainColor h-9 w-full text-white md:px-20 px-3 text-xs flex items-center justify-between">
      <div className="flex md:justify-normal justify-between gap-3">
        <div className="dropdown">
          <Link to="" className="text-white flex items-center gap-1">
            <img
              src="https://madeinmongolia.asia/assets/frontend/images/icons/flags/en.png"
              alt=""
            />
            English <FaCaretDown />
          </Link>
          <ul className="menu dropdown-content bg-white text-xs text-gray-500 w-52">
            <li>
              <a>
                <img
                  src="https://madeinmongolia.asia/assets/frontend/images/icons/flags/en.png"
                  alt=""
                />
                English
              </a>
            </li>

            <li>
              <a>
                <img
                  src="https://madeinmongolia.asia/assets/frontend/images/icons/flags/mn.png"
                  alt=""
                />
                Монгол
              </a>
            </li>

            <li>
              <a>
                <img
                  src="https://madeinmongolia.asia/assets/frontend/images/icons/flags/cn.png"
                  alt=""
                />
                Chinese
              </a>
            </li>
          </ul>
        </div>
        {/**********/}

        <div className="dropdown">
          <Link to="" className=" text-white flex items-center gap-1">
            Монгол төгрөг ₮ <FaCaretDown />
          </Link>
          <ul className=" menu  px-0 py-1 dropdown-content bg-white text-gray-700 w-52">
            <li>
              <a className="text-xs bg-gray-300 rounded-none">
                Монгол төгрөг (₮)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" gap-3 hidden md:flex">
        <Link to="/">About Us</Link>
        <Link to="/">Track Order</Link>
      </div>
    </div>
  );
};

export default Language;
