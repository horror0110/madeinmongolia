import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import StorePayBar from "../components/detailPage/StorePayBar";
import SuggestProduct from "../components/detailPage/SuggestProduct";
import { CiStar } from "react-icons/ci";
import Service from "../components/detailPage/Service";
import ModalWindow from "../components/modal/ModalWindow";
import Comments from "../components/detailPage/Comments";
import SameProducts from "../components/detailPage/SameProducts";
import ProductDetail from "../components/detailPage/ProductDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Grid } from "swiper/modules";
import DetailSidebar from "../components/detailPage/DetailSidebar";
import BreadCrumbComponent from "../components/detailPage/BreadCrumComponent";
import { useLocation, useParams } from "react-router-dom";
import { ProductService } from "../service/ProductService";

const ProductDetailPage = () => {


  const params = useParams();

  const [swiper, setSwiper] = useState(null);

  const [realData, setRealData] = useState([]);

  const [relatedData, setRelatedData] = useState([]);

  const [topSellers, setTopSellers] = useState([]);

  const [sliceData, setSliceData] = useState([]);

  const [getId, setGetId] = useState(null);
  const containerRef = useRef(null);

  //fetch

  useEffect(() => {
    ProductService.getDetail(params.name).then((products) => {
      setGetId(products[0].id);

      setRealData(products);
    });
  }, [params.name]);

  useEffect(() => {
    if (getId !== null) {
      ProductService.getRelated(getId).then((products) => {
        setRelatedData(products);

        setSliceData(products.slice(0, 6));
      });
    }
  }, [getId]);

  useEffect(() => {
    if (getId !== null) {
      ProductService.getTopSellers(getId).then((products) => {
        setTopSellers(products);
      });
    }
  }, [getId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.name, getId, relatedData]);



  const breadcrumbList = [
    {
      label: realData[0] ? realData[0].categories.category.name : null,
      dir:  realData[0] ? `/search?category=${realData[0].categories.category.slug}` : null,
      isCurrent: false,
      last:false
    },
    {
      label: realData[0] ? realData[0].categories.subcategory.name : null,
      dir:  realData[0] ? `/search?subcategory=${realData[0].categories.subcategory.slug}` : null,
      isCurrent: false,
      last:false
    },
    {
      label: realData[0] ? realData[0].categories.subsubcategory.name : null,
      dir:  realData[0] ? `/search?subsubcategory=${realData[0].categories.subsubcategory.slug}` : null,
      isCurrent: false,
      last:true
    },
  ];

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

  return (
    <div className="">
      <Navbar />
      <ModalWindow />

      {/** StorePay menu bar */}

      <StorePayBar />

      {/** StorePay menu bar */}

      <div ref={containerRef} className="mt-2 mx-10 md:mx-10 lg:mx-20 xl:mx-20 2xl:mx-60  ">
        {/*** links ***/}

        <BreadCrumbComponent list={breadcrumbList} />

        {/*** links ***/}
        {/** Танд санал болгох***/}
        <div className="flex items-center gap-20 mt-3 border border-gray-100 shadow p-5">
          <h1 className="text-semibold text-xl font-light text-darkGray">
            Танд санал болгох
          </h1>

          <SuggestProduct data={sliceData} />
        </div>

        {/** Танд санал болгох***/}

        {/**** product detail ***/}

        <ProductDetail product={realData} />

        {/**** product detail ***/}

        {/*** Баталгаат хүргэлт ***/}

        <Service />

        {/*** Баталгаат хүртгэлт ***/}

        <div className="flex justify-center">
          <div className="w-[30%]">
            <DetailSidebar
              topSellers={topSellers}
              renderStar={renderStar}
              realData={realData}
            />
          </div>

          <div className="w-[70%] flex flex-col items-center">
            {/*** СЭТГЭГДЭЛ***/}
            <Comments />

            {/*** СЭТГЭГДЭЛ***/}
            <div className="w-full">
              <h1 className=" text-lg my-10 relative">
                Ижил төстэй бараа
                <span className="absolute border-[0.5px] bottom-[-5px] left-0 w-full bg-gray-400"></span>
                <span className="absolute bottom-[-5px] left-0 border-[1px] border-black w-[120px]"></span>
              </h1>
              <div className="">
                <Swiper
                  className=""
                  spaceBetween={0}
                  slidesPerView={2}
                  onSwiper={(s) => {
                    setSwiper(s);
                  }}
                  modules={[Grid]}
                >
                  {relatedData.map((el, index) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
