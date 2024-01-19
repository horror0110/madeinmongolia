import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WeekBestTemp from "./WeekBestTemp";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const WeekBest = ({ data, header }) => {
  const [swiper, setSwiper] = useState(null);

  const nexto = () => {
    swiper.slideNext();
  };

  const backto = () => {
    swiper.slidePrev();
  };
  return (
    <>
      <Swiper
        className=""
        spaceBetween={0}
        onSwiper={(s) => {
          setSwiper(s);
        }}
        speed={700}
        pagination={{ clickable: true }}
        slidesPerView={5}
      >
        {data.map((product, index) => (
          <SwiperSlide key={product.id}>
            <WeekBestTemp product={product} />
          </SwiperSlide>
        ))}

        <div
          onClick={backto}
          className="left-0 absolute p-2 top-1/2 z-10 bg-white rounded-full"
        >
          <FaAngleLeft size={25} />
        </div>

        <div
          onClick={nexto}
          className="right-0 absolute p-2 z-10 top-1/2 bg-white rounded-full"
        >
          <FaAngleRight size={25} />
        </div>
      </Swiper>
    </>
  );
};

export default WeekBest;
