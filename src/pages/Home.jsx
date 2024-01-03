import React from "react";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/homePage/Hero";
import NewProducts from "../components/homePage/NewProducts";
import Footer from "../components/Footer";
import WeekBest from "../components/homePage/WeekBest";
import data from "../utils/product.json";
import Cards from "../components/homePage/Cards";
import BannerTemp from "../components/homePage/BannerTemp";
import PayChance from "../components/homePage/PayChance";
import GridBanner from "../components/homePage/GridBanner";
import Sponsor from "../components/homePage/Sponsor";
import BlackBanner from "../components/homePage/BlackBanner";
import Model from "../components/homePage/Model";
import SortProduct from "../components/homePage/SortProduct";
import Info from "../components/homePage/Info";
import Modal from "../components/modal/Modal";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero />
      <Modal data={data} />
      <NewProducts
        data={data}
        header="https://madeinmongolia.asia/uploads/image_names/web_images/new_products_title/VZAH90jhOEIBihmh8daBrA96HimH6tHQmMm9eB5Z.png"
      />
      <WeekBest
        data={data}
        header="https://madeinmongolia.asia/uploads/image_names/web_images/big_swiper/0TzSIXAxutDTbLqzoK3vfCkm2zTttRKdtGcvIKSx.png"
      />
      <Cards data={data} />
      <BannerTemp img="https://madeinmongolia.asia/uploads/home_section_big_one_banner//JHjv5HeiyRZHqBlRCxyhfDBKTfJiz0PUJ8DNAIne.png" />
      <PayChance />
      <WeekBest
        data={data}
        header="https://madeinmongolia.asia/uploads/image_names/web_images/big_swiper/Y8I5iAz701dy1JV3Va9TSrYIfzHXRrnsHtz73WC7.png"
      />
      <GridBanner
        banner="https://madeinmongolia.asia/uploads/home2_categories/oWHuUYQhDzXV0ya9Yy0BOr03oKxkqYuV0O0UQa9d.png"
        data={data}
      />
      <GridBanner
        banner="https://madeinmongolia.asia/uploads/home2_categories/mUHqG0wanqbJACukQNiyh9oqSNlg2jZr0B1fGfUn.png"
        data={data}
      />
      <BannerTemp img="https://madeinmongolia.asia/uploads/home_section_big_one_banner//sAHQW6BDavscHhQzfM1VrbAFsG7Tj8vetz9Q3Wjg.png" />
      <WeekBest
        data={data}
        header="https://madeinmongolia.asia/uploads/image_names/web_images/big_swiper/gmh5vrBqUN6BOenmWiOOzo5O3eKqqansOmWoKAIo.png"
      />

      <Sponsor img="https://madeinmongolia.asia/uploads/image_names/web_images/product_tag/xEnox9HnsV1AtEtZ5G95pCTpsuqwqASpb0psBJBY.png" />
      <NewProducts data={data} />
      <BannerTemp img="https://madeinmongolia.asia/uploads/banners/myrK4MV9gk6i1NYEG2LFZfSRtbBairG81QfjrPsU.png" />
      <Sponsor img="https://madeinmongolia.asia/uploads/image_names/web_images/product_tag_2/6ZxnBhNDF1qEcuvTRGi1L4LNfcNIsxxrvcBUpN7U.png" />
      <NewProducts data={data} />
      <BlackBanner data={data} />
      <Model data={data} />
      <SortProduct data={data} />
      <Info />

      <Footer />
    </div>
  );
};

export default Home;
