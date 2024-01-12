import React from "react";
import { Link } from "react-router-dom";

const GridBanner = ({ data }) => {
  return (
    data && (
      <div className="flex  mt-10 justify-center mx-20">
        <div className="relative">
          <img
            src={`https://madeinmongolia.asia/${data.feature_image}`}
            alt=""
            className="rounded-md h-full w-[300px] max-w-[300px]"
          />
          <div className="absolute z-10 top-5 left-5">
            <h1 className="text-[18px] font-medium mb-5">{data.name}</h1>

            <button className="text-white bg-red-500 px-2 py-1 text-[14px] rounded-md">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4">
          {data.products.map((product, index) => (
            <Link
              to={`/product/${product.slug}`}
              key={index}
              className="border flex flex-col items-center h-full py-2 px-10 hover:shadow-2xl "
            >
              <h1 className="mb-3 text-[11px]">{product.name}</h1>
              <img
                src={`https://madeinmongolia.asia/${product.thumbnail_img}`}
                alt=""
                width={120}
                height={80}
              />
            </Link>
          ))}
        </div>
      </div>
    )
  );
};

export default GridBanner;
