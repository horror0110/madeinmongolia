import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SameProducts = ({ data, renderStar }) => {
  const [hovered, setHovered] = useState(false);

  const sidebarClasses = `transform duration-500 z-10 transition-transform absolute right-0 top-0 bg-white h-full flex flex-col gap-5 p-2 items-center justify-center ${
    hovered ? "translate-x-0" : "translate-x-[50px] z-0 "
  }`;
  return (
    <Link
      to={`/product/${data.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={
        hovered
          ? `flex gap-3 border relative shadow bottom-2 duration-500 transition-all transform`
          : ` flex gap-3 border relative bottom-0 duration-500 transition-all transform `
      }
    >
      <div className="relative">
        <img
          src={`https://madeinmongolia.asia/${data.thumbnail_image}`}
          alt=""
          width={130}
          height={130}
        />

        <div className={sidebarClasses}>
          <CiHeart />
          <IoEyeSharp />
          <IoReload />
        </div>
      </div>

      <div className="flex flex-col z-20 bg-white ">
        <h1 className="mt-3 font-bold">{data.name}</h1>
        <div className="flex">{renderStar()}</div>

        <span className="mt-3 text-mainColor font-bold">{data.base_price}</span>
        <div className="border  border-mainColor w-max p-2 hover:bg-mainColor hover:text-white rounded-md absolute bottom-2 right-2">
          <IoCartOutline />
        </div>
      </div>
    </Link>
  );
};

export default SameProducts;
