import React, { useState } from "react";
import menu from "../../../utils/menu.json";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ open, setOpen }) => {
  const [getSub, setGetSub] = useState(menu[0].subcategories);

  const [activeLink, setActiveLink] = useState("");

  const sidebarClasses = `h-screen bg-gray-300 w-[90%] fixed top-0 left-0 z-50 p-5 transform duration-500 transition-transform ${
    open ? "translate-x-0" : "-translate-x-full"
  }`;

  return (
    <div className={sidebarClasses}>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="absolute right-[-50px] bg-white p-2 rounded-md"
        >
          <IoMdClose size={20} />
        </div>
      )}

      <div className="flex gap-20">
        <div className="flex flex-col gap-2">
          {menu.map((el, index) => (
            <div key={el.id}>
              <div className="flex flex-col">
                <Link
                  className={
                    activeLink == index
                      ? `bg-mainColor text-white px-2 rounded-md p-1`
                      : "text-black px-2 rounded-md p-1"
                  }
                  onClick={() => {
                    setGetSub(el.subcategories), setActiveLink(index);
                  }}
                  to="/"
                >
                  {el.title}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-20">
          {getSub &&
            getSub.map((el, index) => (
              <div key={index}>
                <h1 className="font-bold  mb-5 border-b border-b-gray-500 pb-2">
                  {el.title}
                </h1>
                <div className="flex flex-col gap-1">
                  {el.items.map((item, index) => (
                    <Link className="text-[14px] text-gray-600" key={index}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
