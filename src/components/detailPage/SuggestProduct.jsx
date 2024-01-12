import React from "react";
import { Link } from "react-router-dom";

const SuggestProduct = ({ data }) => {


  return (
    <div  className="flex gap-10">
    
      {data && data.map((product, index) => (
        <Link to={`/product/${product.slug}`} className="flex flex-col items-center gap-2" key={product.id}>
          <img
            src={`https://madeinmongolia.asia/${product.thumbnail_image}`}
            width={80}
            height={100}
            className="min-h-[100px]"
          />
          <span className="text-mainColor text-[12px] font-semibold">
            {product.base_price}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SuggestProduct;
