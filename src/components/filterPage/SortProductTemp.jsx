import React, { useContext, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { GlobalContext } from "../../context/GlobalContext";

const SortProductTemp = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const {getModal} = useContext(GlobalContext);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={
        hovered
          ? `border p-1 flex flex-col w-[220px] h-[300px]  shadow relative bottom-2 duration-300 transition-all transform`
          : `border p-1 flex flex-col  w-[220px] h-[300px]  relative bottom-0 duration-300 transition-all transform`
      }
    >
      <div className="relative">
        <img
          src={product.image[0]}
          className="object-cover w-full h-full min-h-[210px]"
          alt={product.title}
        />

        <div
          className={
            hovered
              ? `flex cursor-pointer absolute gap-10 justify-center p-1 z-30 bg-white transition-transform duration-800 bottom-0  translate-y-0 w-full `
              : `flex cursor-pointer absolute gap-10 justify-center p-1 z-0 bg-white transition-transform duration-800  translate-y-5 w-full `
          }
        >
          <CiHeart />
          <IoEyeSharp onClick={()=> getModal(product.id)} />
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
