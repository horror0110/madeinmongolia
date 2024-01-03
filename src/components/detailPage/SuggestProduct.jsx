import React from "react";

const SuggestProduct = ({ data }) => {
  return (
    <div className="flex  gap-10">
      {data.map((product, index) => (
        <div className="flex flex-col items-center gap-2" key={product.id}>
          <img
            src={product.image[0]}
            width={80}
            height={100}
            className="min-h-[100px]"
          />
          <span className="text-mainColor text-[12px] font-semibold">
            {product.price}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SuggestProduct;
