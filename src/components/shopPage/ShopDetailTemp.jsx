import React from "react";
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { IoMdCart } from "react-icons/io";
import thousandify from "thousandify"

const ShopDetailTemp = ({ product }) => {
  return (
    <div className="w-[230px] border rounded-md flex flex-col gap-3 hover:shadow-2xl cursor-pointer text-darkColor">
      <img
        src={product.image[0]}
        alt=""
        className="object-cover h-[170px] px-5 "
      />

      <h1 className="text-center text-[14px]  font-semibold border-b pb-2">
        {product.title}
      </h1>

      <span className="text-darkBlue font-semibold px-5">{thousandify(product.price)}₮</span>

      <div className="flex items-center h-10">
        <div className="hover:bg-mainColor hover:text-white border p-3 h-full flex items-center justify-center ">
          <CiHeart />
        </div>

        <div className="border hover:bg-mainColor hover:text-white p-3 h-full flex items-center justify-center">
          <TfiReload size={12} />
        </div>

        <button className="flex hover:bg-mainColor hover:text-white items-center gap-2 p-2 border w-full h-full justify-center text-[14px] font-semibold">
          Сагслах <IoMdCart />
        </button>
      </div>
    </div>
  );
};

export default ShopDetailTemp;
