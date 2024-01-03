import React from "react";
import WeekBest from "./WeekBest";

const BlackBanner = ({ data }) => {
  return (
    <div className="my-5">
      <img
        src="https://madeinmongolia.asia/uploads/image_names/web_images/big_swiper/Zn7H7woCVw1LhvBuw0nv6q3jMb1q8pfgY7mGixc3.jpg"
        alt=""
      />

      <div className="bg-blackColor px-20 py-10">
        <WeekBest data={data} />
      </div>
    </div>
  );
};

export default BlackBanner;
