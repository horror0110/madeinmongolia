import React, { useState } from "react";
import Navbar from "../components/shared/navbar/Navbar";
import StorePayBar from "../components/local/detailPage/StorePayBar";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import data from "../utils/product.json";
import SuggestProduct from "../components/local/detailPage/SuggestProduct";
import { CiStar } from "react-icons/ci";
import Service from "../components/local/detailPage/Service";
import Made from "../components/local/detailPage/Made";
import GoodProducts from "../components/local/detailPage/GoodProducts";
import Comments from "../components/local/detailPage/Comments";
import SameProducts from "../components/local/detailPage/SameProducts";
import ProductDetail from "../components/local/detailPage/ProductDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Grid } from "swiper/modules";
import DetailSidebar from "../components/local/detailPage/DetailSidebar";

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

  const links = [
    {
      id: 1,
      title: "Нүүр",
    },
    {
      id: 2,
      title: "Бүх Ангиллууд",
    },
    {
      id: 3,
      title: "Тоглоом",
    },
    {
      id: 4,
      title: "Монгол тоглоом",
    },
    {
      id: 5,
      title: "Модон тоглоом",
    },
  ];

  const product = data[0];
  return (
    <div>
      <Navbar />

      {/** StorePay menu bar */}

      <StorePayBar />

      {/** StorePay menu bar */}

      {/*** links ***/}

      <div className="mx-20 mt-2">
        <div className="flex gap-1">
          {links.map((link, index) => (
            <Link
              key={link.id}
              className="flex items-center text-gray-500 text-[13px] hover:text-gray-700 hover:underline"
              href=""
            >
              {link.title} <FaChevronRight size={10} />
            </Link>
          ))}
        </div>
        {/*** links ***/}

        {/** Танд санал болгох***/}

        <div className="flex items-center gap-20 mt-3 border border-gray-100 shadow p-5 w-max">
          <h1 className="text-semibold text-xl">Танд санал болгох</h1>

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
            <Swiper
              className="w-[900px] mt-10 "
              spaceBetween={0}
              slidesPerView={2}
              onSwiper={(s) => {
                setSwiper(s);
              }}
              grid={{ rows: 2 }}
              slidesPerColumn={2}
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

            {/*** Төстэй бараанууд */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
