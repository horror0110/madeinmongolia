import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../../../utils/menu.json";
import Sidebar from "./Sidebar";
import Shadow from "./Shadow";

const MenuItem = () => {
  const [open, setOpen] = useState(false);
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
    <div className="border-t-[1px]">
      <div className="mx-20 mt-3">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-10">
            <div
              onClick={() => setOpen(true)}
              className="flex flex-col gap-2 items-center bg-gray-200 w-max p-2"
            >
              <img
                src="https://madeinmongolia.asia/assets/frontend/images/icons/category2_icon.gif"
                alt=""
                width={25}
                height={25}
              />
              <span>Ангилал</span>
            </div>

            {links.map((link, index) => (
              <Link key={index} className="hover:border-b-[2px] border-b-mainColor" to="">
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <Link className="hover:border-b-[2px] border-b-mainColor" to="">
              ШИНЭ
            </Link>
            <Link className="hover:border-b-[2px] border-b-mainColor" to="">
              ҮЙЛДВЭРЛЭ
            </Link>
          </div>
        </div>

        <Sidebar open={open} setOpen={setOpen} />
        <Shadow open={open} />
      </div>
    </div>
  );
};

export default MenuItem;
