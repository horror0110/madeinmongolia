import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import StorePayBar from "../components/detailPage/StorePayBar";
import links from "../utils/link.json";
import data from "../utils/product.json";
import SuggestProduct from "../components/detailPage/SuggestProduct";
import { CiStar } from "react-icons/ci";
import Service from "../components/detailPage/Service";
import Modal from "../components/modal/Modal";
import Comments from "../components/detailPage/Comments";
import SameProducts from "../components/detailPage/SameProducts";
import ProductDetail from "../components/detailPage/ProductDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Grid } from "swiper/modules";
import DetailSidebar from "../components/detailPage/DetailSidebar";

import Way from "../components/detailPage/Way";

const ProductDetailPage = () => {
  const [swiper, setSwiper] = useState(null);

  const nexto = () => {
    swiper.slideNext();
  };

  const backto = () => {
    swiper.slidePrev();
  };

  const renderStar = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(<CiStar key={i} />);
    }

    return stars;
  };

  const product = data[0];
  return (
    <div>
      <Navbar />
      <Modal />

      {/** StorePay menu bar */}

      <StorePayBar />

      {/** StorePay menu bar */}

      {/*** links ***/}

      <Way links={links} />

      {/*** links ***/}

      <div className="mx-20 mt-2">
        {/** Танд санал болгох***/}

        <div className="flex items-center gap-20 mt-3 border border-gray-100 shadow p-5 w-max">
          <h1 className="text-semibold text-xl font-light text-darkGray">
            Танд санал болгох
          </h1>

          <SuggestProduct data={data} />
        </div>

        {/** Танд санал болгох***/}

        {/**** product detail ***/}

        <ProductDetail product={product} />

        {/**** product detail ***/}

        {/*** Баталгаат хүргэлт ***/}

        <Service />

        {/*** Баталгаат хүртгэлт ***/}

        <div className="flex gap-10">
          <DetailSidebar data={data} renderStar={renderStar} />

          <div className="">
            {/*** СЭТГЭГДЭЛ***/}
            <Comments />

            {/*** СЭТГЭГДЭЛ***/}

            {/*** Төстэй бараанууд */}
            <h1 class=" text-lg my-10 relative">
              Ижил төстэй бараа
              <span class="absolute border-[0.5px] bottom-[-5px] left-0 w-full bg-gray-400"></span>
              <span class="absolute bottom-[-5px] left-0 border-[1px] border-black w-[120px]"></span>
            </h1>
            <div className="w-[900px]">
              <Swiper
                className=""
                spaceBetween={0}
                slidesPerView={2}
                onSwiper={(s) => {
                  setSwiper(s);
                }}
                grid={{ rows: 2 }}
                modules={[Grid]}
              >
                {data.map((el, index) => (
                  <SwiperSlide key={el.id}>
                    <SameProducts data={el} renderStar={renderStar} />
                  </SwiperSlide>
                ))}
                <div
                  onClick={backto}
                  className="absolute bg-gray-400 rounded-full p-2 left-0 transform -translate-y-1/2 top-1/2 z-10"
                >
                  <FaAngleLeft color="black" />
                </div>
                <div
                  onClick={nexto}
                  className="absolute bg-gray-400 rounded-full p-2 right-0 transform -translate-y-1/2 top-1/2 z-10 "
                >
                  <FaAngleRight />
                </div>
              </Swiper>
            </div>

            {/*** Төстэй бараанууд */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
