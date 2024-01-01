import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Hero = () => {
  const data = [
    {
      id: 1,
      image:
        "https://madeinmongolia.asia/uploads/sliders/big/H2fYiGO3hGGf6iqVBR38BXojsP2zbos4e1vsJpbl.jpg",
    },
    {
      id: 2,
      image:
        "https://madeinmongolia.asia/uploads/sliders/big/j6nHVBIJQCRsrqm3WngJSJ6zNs26zsqWAhdRNRL3.png",
    },
    {
      id: 3,
      image:
        "https://madeinmongolia.asia/uploads/sliders/big/D5AVaRIDDQ8mpoVjCjpe2Q4U3tvLbqK1YLreA1xE.png",
    },
    {
      id: 4,
      image:
        "https://madeinmongolia.asia/uploads/sliders/big/lCvczqya3PnPBAINHUl7HDV0965FZ4Der4w2Ebpm.png",
    },
  ];

  const [swiper, setSwiper] = useState(null);
  const [hovered, setHovered] = useState(false);

  const nexto = () => {
    swiper.slideNext();
  };

  const backto = () => {
    swiper.slidePrev();
  };

  return (
    <div>
      <div
        onClick={backto}
        className={
          hovered
            ? `bg-gray-500 transition duration-400 absolute left-0 z-10`
            : `bg-gray-500 transition duration-400 opacity-50 absolute left-0 z-10`
        }
      >
        <FaAngleLeft color="black" size={30} />
      </div>

      <div
        onClick={nexto}
        className={
          hovered
            ? `bg-gray-500 transition duration-400 absolute right-0 z-10`
            : `bg-gray-500 opacity-50 transition duration-400 absolute right-0 z-10`
        }
      >
        <FaAngleRight color="black" size={30} />
      </div>

      <Swiper
        className=""
        spaceBetween={10}
        onSwiper={(s) => {
          setSwiper(s);
        }}
        speed={700}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
      >
        <div className="">
          {data.map((product, index) => (
            <SwiperSlide key={product.id}>
              <img
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                src={product.image}
                className="object-cover"
                alt=""
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
