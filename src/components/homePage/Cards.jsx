import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="grid grid-cols-4 gap-5">
        {data.map((product, index) => (
          <img
            key={product.id}
            src="https://madeinmongolia.asia/uploads/home_section_banner//qyZWQJpoUKX24uv7LFchiHD0CwfKLLzeLEHbTOnj.png"
            alt=""
            width={250}
            height={250}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
