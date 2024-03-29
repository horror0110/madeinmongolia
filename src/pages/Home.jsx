import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/homePage/Hero";
import NewProducts from "../components/homePage/NewProducts";
import Footer from "../components/Footer";
import WeekBest from "../components/homePage/WeekBest";
import data from "../utils/product.json";
import BannerTemp from "../components/homePage/BannerTemp";
import PayChance from "../components/homePage/PayChance";
import GridBanner from "../components/homePage/GridBanner";
import Sponsor from "../components/homePage/Sponsor";
import BlackBanner from "../components/homePage/BlackBanner";
import Model from "../components/homePage/Model";
import SortProduct from "../components/homePage/SortProduct";
import Info from "../components/homePage/Info";
import ModalWindow from "../components/modal/ModalWindow";
import { ProductService } from "../service/ProductService";
import ShopCart from "../components/homePage/ShopCart";
import NewProductsSkeleton from "../components/skeletons/homePage/NewProductsSkeleton";

const Home = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [weekProducts, setWeekProducts] = useState([]);
  const [weekProducts2, setWeekProducts2] = useState([]);
  const [gridProducts, setGridProducts] = useState([]);
  const [emeelProducts, setEmeelProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [greenGroupProducts, setGreenGroupProducts] = useState([]);
  const [shops, setShops] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // fetch
  useEffect(() => {
    ProductService.getNew().then((products) => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);

      setNewProducts(products);
    });
  }, []);

  useEffect(() => {
    ProductService.getWeek().then((products) => {
      setWeekProducts(products);
    });
  }, []);

  useEffect(() => {
    ProductService.getWeek2().then((products) => {
      setWeekProducts2(products);
    });
  }, []);

  useEffect(() => {
    ProductService.getGrid().then((products) => {
      setGridProducts(products);
    });
  }, []);

  useEffect(() => {
    ProductService.getEmeel().then((products) => {
      setEmeelProducts(products);
    });
  }, []);

  useEffect(() => {
    ProductService.getCart().then((products) => {
      setCartProducts(products);
    });
  }, []);
  useEffect(() => {
    ProductService.getGreenGroup().then((products) => {
      setGreenGroupProducts(products);
    });
  }, []);

  useEffect(() => {
    ProductService.getShops().then((products) => {
      setShops(products);
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      <Hero />
      <ModalWindow />

      {/*** Шинээр нэмэгдсэн ***/}
      <div>
        <img
          src="https://madeinmongolia.asia/uploads/image_names/web_images/new_products_title/VZAH90jhOEIBihmh8daBrA96HimH6tHQmMm9eB5Z.png"
          alt=""
          className="my-5"
        />
        {loading ? (
          <NewProductsSkeleton />
        ) : (
          <NewProducts newProducts={newProducts} />
        )}
        <img
          src="https://madeinmongolia.asia/uploads/image_names/web_images/new_products_footer/mzFva9xtYCa77qWV9TmL8pqY4pdhm0oZbqgJlJUK.jpg"
          alt=""
          className="my-10"
        />
      </div>

      {/*** Шинээр нэмэгдсэн ***/}

      {/*** Энэ долоо хоногийн онцлох ***/}

      <img
        src="https://madeinmongolia.asia/uploads/image_names/web_images/big_swiper/0TzSIXAxutDTbLqzoK3vfCkm2zTttRKdtGcvIKSx.png"
        alt=""
      />

      <WeekBest data={weekProducts} />

      {/*** Энэ долоо хоногийн онцлох ***/}

      {/*** Бэлгийн карт ***/}
      <img
        src="https://madeinmongolia.asia/uploads/image_names/web_images/big_swiper/gmh5vrBqUN6BOenmWiOOzo5O3eKqqansOmWoKAIo.png"
        alt=""
      />
      <WeekBest data={cartProducts} />
      {/*** Бэлгийн карт ***/}

      {/** Хатрагч байгууллагууд */}

      <ShopCart data={shops} />

      {/** Хатрагч байгууллагууд */}

      {/** баннер зураг */}
      <BannerTemp img="https://madeinmongolia.asia/uploads/home_section_big_one_banner//JHjv5HeiyRZHqBlRCxyhfDBKTfJiz0PUJ8DNAIne.png" />

      {/** баннер зураг */}

      {/** ТӨЛӨХ БОЛОМЖ */}
      <PayChance />

      {/** ТӨЛӨХ БОЛОМЖ */}

      {/** ЭНЭ 7 ХОНОГИЙН ОНЦЛОХ ***/}
      <img
        src="https://madeinmongolia.asia/uploads/image_names/web_images/big_swiper/Y8I5iAz701dy1JV3Va9TSrYIfzHXRrnsHtz73WC7.png"
        alt=""
      />

      <WeekBest data={weekProducts2} />

      {/** ЭНЭ 7 ХОНОГИЙН ОНЦЛОХ ***/}

      {/** GRID PRODUCTS ***/}
      <GridBanner data={gridProducts[0]} />
      <GridBanner data={gridProducts[1]} />

      {/** GRID PRODUCTS ***/}

      {/** баннер зураг */}
      <BannerTemp img="https://madeinmongolia.asia/uploads/home_section_big_one_banner//sAHQW6BDavscHhQzfM1VrbAFsG7Tj8vetz9Q3Wjg.png" />

      {/** баннер зураг */}

      {/* <WeekBest
        data={data}
        header="https://madeinmongolia.asia/uploads/image_names/web_images/big_swiper/gmh5vrBqUN6BOenmWiOOzo5O3eKqqansOmWoKAIo.png"
      /> */}

      {/* <Sponsor img="https://madeinmongolia.asia/uploads/image_names/web_images/product_tag/xEnox9HnsV1AtEtZ5G95pCTpsuqwqASpb0psBJBY.png" />
      <NewProducts data={data} /> */}

      {/** баннер зураг */}
      <BannerTemp img="https://madeinmongolia.asia/uploads/banners/myrK4MV9gk6i1NYEG2LFZfSRtbBairG81QfjrPsU.png" />

      {/** баннер зураг */}

      {/** GREEN GROUP */}
      <Sponsor img="https://madeinmongolia.asia/uploads/image_names/web_images/product_tag_2/6ZxnBhNDF1qEcuvTRGi1L4LNfcNIsxxrvcBUpN7U.png" />
      <NewProducts newProducts={greenGroupProducts} header="" />

      {/** GREEN GROUP */}

      {/** ЭМЭЭЛ БАННЕР */}
      <BlackBanner data={emeelProducts} />

      {/* <Model data={data} /> */}

      {/** ХҮНС */}
      <SortProduct data={data} />
      {/** ХҮНС */}

      {/** МЭДЭЭ */}
      <Info />

      {/** МЭДЭЭ */}

      <Footer />
    </div>
  );
};

export default Home;
