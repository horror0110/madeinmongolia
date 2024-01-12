import React from "react";
import { Link } from "react-router-dom";

const GoodProducts = ({ product, renderStar }) => {
  return (
    <Link to={`/product/${product.slug}`} className="flex items-center gap-5">
      <img src={`https://madeinmongolia.asia/${product.thumbnail_image}`} alt="" width={80} height={80} />

      <div className="flex flex-col gap-1">
        <h1 className="text-[14px] font-semibold">{product.name}</h1>
        <div className="flex">{renderStar()}</div>

        <span className="text-mainColor font-semibold">{product.base_price}</span>
      </div>
    </Link>
  );
};

export default GoodProducts;
