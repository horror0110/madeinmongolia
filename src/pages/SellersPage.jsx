import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { ProductService } from "../service/ProductService";

const SellersPage = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    ProductService.getShopList().then((products) => {
      setShops(products);
    });
  }, []);
  return (
    <div>
      <Navbar />

      <div className="grid cursor-pointer grid-cols-3 gap-5 2xl:mx-72 xl:mx-20 mx-10 mt-10 mb-40">
        {shops.map((shop, el) => (
          <div className="flex  items-center gap-3 border rounded-md p-3">
            <img
              src={`https://madeinmongolia.asia/${shop.logo}`}
              alt=""
              width={100}
              height={100}
            />

            <h1 className="text-[13px] text-shopColor">{shop.name}</h1>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default SellersPage;
