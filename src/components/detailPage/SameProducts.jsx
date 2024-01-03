import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";

const SameProducts = ({ data, renderStar }) => {
  const [hovered, setHovered] = useState(false);

  const sidebarClasses = `transform duration-500 z-10 transition-transform absolute right-0 top-0 bg-white h-full flex flex-col gap-5 p-2 items-center justify-center ${
    hovered ? "translate-x-0" : "translate-x-[50px] z-0 "
  }`;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={
        hovered
          ? `flex gap-3 w-[400px] border relative shadow bottom-2 duration-500 transition-all transform`
          : ` flex gap-3 w-[400px] border relative bottom-0 duration-500 transition-all transform `
      }
    >
      <div className="relative">
        <img src={data.image[0]} alt="" width={130} height={80} />

        <div className={sidebarClasses}>
          <CiHeart />
          <IoEyeSharp />
          <IoReload />
        </div>
      </div>

      <div className="flex flex-col z-20 bg-white ">
        <h1 className="mt-3 font-bold">{data.title}</h1>
        <div className="flex">{renderStar()}</div>

        <span className="mt-3 text-mainColor font-bold">{data.price}</span>
        <div className="border  border-mainColor w-max p-2 hover:bg-mainColor hover:text-white rounded-md absolute bottom-2 right-2">
          <IoCartOutline />
        </div>
      </div>
    </div>
  );
};

export default SameProducts;
