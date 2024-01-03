import React from "react";

const BannerTemp = ({ img }) => {
  return (
    <div className="w-full relative my-10">
      <img src={img} alt="" className="object-cover" />
    </div>
  );
};

export default BannerTemp;
