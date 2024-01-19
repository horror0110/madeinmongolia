import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../sidebars/Sidebar";
import Shadow from "./Shadow";
import { GlobalContext } from "../../context/GlobalContext";

const MenuItem = () => {
  const { open, setOpen } = useContext(GlobalContext);

  const links = [
    {
      id: 1,
      title: "БЭЛЭГ ДУРСГАЛ",
    },
    {
      id: 2,
      title: "ГОО САЙХАН",
    },
    {
      id: 3,
      title: "НООЛУУРАН БҮТЭЭГДЭХҮҮН",
    },
    {
      id: 4,
      title: "ХҮНС",
    },
    {
      id: 5,
      title: "ЭРҮҮЛ МЭНД",
    },
  ];
  return (
    <div className="px-10 lg:px-20 xl:px-20 2xl:px-60 border-t  border-t-[#c5c6d0] py-2">
      <div>
        <div className="text-[12px] flex justify-between items-center">
          <div className="flex items-center gap-[40px]">
            <div
              onClick={() => setOpen(true)}
              className="flex flex-col gap-2 items-center p-1 w-max bg-gray-200"
            >
              <img
                src="https://madeinmongolia.asia/assets/frontend/images/icons/category2_icon.gif"
                alt=""
                width={25}
                height={25}
              />
              <span className="text-[11px]">Ангилал</span>
            </div>

            {links.map((link, index) => (
              <Link
                to=""
                key={index}
                className="hover:border-b-[2px] border-b-mainColor text-[11px] text-[#2c2c2c]"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="text-[11px] flex items-center gap-[20px]">
            <Link to="" className="hover:border-b-[2px] border-b-mainColor">
              ШИНЭ
            </Link>
            <Link
              to="/sellers"
              className="hover:border-b-[2px] border-b-mainColor"
            >
              ҮЙЛДВЭРЛЭГЧИД
            </Link>
          </div>
        </div>

        <Sidebar open={open} setOpen={setOpen} />

        {open && <Shadow setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default MenuItem;
