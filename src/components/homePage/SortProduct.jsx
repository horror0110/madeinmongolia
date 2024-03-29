import React from "react";
import SortProductTemp from "../filterPage/SortProductTemp";

const SortProduct = ({ data }) => {
  return (
    <div className="mx-10  lg:mx-20 xl:mx-20 2xl:mx-60 my-10">
      <div className="flex justify-between items-center border-b pb-5">
        <h1 className=" text-lg font-bold">Хүнс</h1>
        <div className="flex gap-3 text-mainGray ">
          <button className="bg-mainColor px-3 py-1 h-max rounded-full text-[13px] shadow-lg text-white">
            Давс
          </button>
          <button className="shadow rounded-full px-3 py-1 h-max text-[13px] bg-white ">
            Нөөшилсөн бүтээгдэхүүн
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5  2xl:gap-20 xl:gap-y-28  mt-5">
        {data.map((product, index) => (
          <div className="" key={product.id}>
            <SortProductTemp product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortProduct;
