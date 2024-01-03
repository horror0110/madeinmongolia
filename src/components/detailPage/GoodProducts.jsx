import React from "react";

const GoodProducts = ({ product, renderStar }) => {
  return (
    <div className="flex items-center gap-5">
      <img src={product.image[0]} alt="" width={80} height={80} />

      <div className="flex flex-col gap-1">
        <h1 className="text-[14px] font-semibold">{product.title}</h1>
        <div className="flex">{renderStar()}</div>

        <span className="text-mainColor font-semibold">{product.price}</span>
      </div>
    </div>
  );
};

export default GoodProducts;
