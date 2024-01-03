import React from "react";

const GridBanner = ({ banner, data }) => {
  return (
    <div className="flex  mt-10 justify-center">
      <div className="relative">
        <img src={banner} alt="" className="rounded-md" />
        <div className="absolute z-10 top-5 left-5">
          <h1 className="text-[18px] font-medium mb-5">Гоо сайхан</h1>

          <button className="text-white bg-red-500 px-2 py-1 text-[14px] rounded-md">
            Дэлгэрэнгүй
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4">
        {data.map((product, index) => (
          <div key={product.id} className="border flex flex-col items-center h-full py-2 px-10 hover:shadow-2xl ">
            <h1 className="mb-3 text-[11px]">{product.title}</h1>
            <img src={product.image[0]} alt="" width={120} height={80} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridBanner;
