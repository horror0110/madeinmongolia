import React, { useState } from "react";

import { CiHeart } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";

const SortProductTemp = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={
        hovered
          ? `border p-2 flex flex-col shadow relative bottom-2 duration-300 transition-all transform`
          : `border p-2 flex flex-col relative bottom-0 duration-300 transition-all transform`
      }
    >
      <div className="relative">
        <img
          src={product.image[0]}
          className="object-cover min-h-[160px]"
          width={160}
          height={160}
        />

        <div
          className={
            hovered
              ? `flex absolute gap-10 justify-center  p-1 z-30 bg-white transition-transform duration-800 bottom-0  translate-y-0 w-full `
              : `flex absolute gap-10 justify-center p-1 z-0 bg-white transition-transform duration-800  translate-y-5 w-full `
          }
        >
          <CiHeart />
          <IoEyeSharp />
          <IoReload />
        </div>
      </div>
      <div className="z-20 bg-white">
        <h1 className="font-bold my-1 text-[14px]">{product.title}</h1>
        <div className="text-mainColor font-bold">{product.price}</div>
        <div className="text-[#00b293] text-[11px] font-bold my-2">
          Хүргэлт үнэгүй
        </div>
        <button className="text-mainColor bg-gray-100 text-[12px] w-full py-1 rounded-md hover:bg-[#00b293] hover:text-white">
          Сагсанд нэмэх
        </button>
      </div>
    </div>
  );
};

export default SortProductTemp;
