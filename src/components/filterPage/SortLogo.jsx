import React from "react";

const SortLogo = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-10">
      <div className="flex gap-2  ">
        {data.map((product, index) => (
          <img
            key={product.id}
            src={product.title}
            alt=""
            className="border p-1"
            width={70}
            height={70}
          />
        ))}
      </div>
      <div className="flex items-center">
        <button className="rounded-full border p-1">+</button>
        <div className="text-[14px] font-semibold">Илүү</div>
      </div>
    </div>
  );
};

export default SortLogo;
