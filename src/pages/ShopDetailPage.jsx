import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { ProductService } from "../service/ProductService";
import { useParams } from "react-router-dom";
import Made from "../components/detailPage/Made";
import { CiStar } from "react-icons/ci";
import { FaMedal } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi"

const ShopDetailPage = () => {
  const params = useParams();

  const [data, setData] = useState([]);

  const renderStar = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(<CiStar key={i} />);
    }

    return stars;
  };

  useEffect(() => {
    ProductService.getShopDetail(params.name).then((products) => {
      setData(products);
    });
  }, [params.name]);

  const products = data[0];

  return products && (
    <div>
      <Navbar />

      <div className="mx-10 2xl:mx-60 xl:mx-20 my-10">
        <img
          src={`https://madeinmongolia.asia/${products.sliders[0]}`}
          alt=""
        />

        <div className="flex justify-between items-center mt-10">
          <div className="flex gap-10 w-[500px]">
            <img
              src={`https://madeinmongolia.asia/${products.logo}`}
              width={150}
              height={150}
            />

            <div className="text-darkGray text-[13px] ">
              <h1 className="font-bold text-xl">{products.name}</h1>
              <p className="mt-3">{products.address}</p>
              <span>Утас: {products.phone}</span>
            </div>
          </div>

          <div className="bg-mainColor text-white p-2">


          <FaFacebookF/>

          </div>
          
        </div>

        {/****/}

        <div className="border rounded-md p-3 bg-gray-100 border-gray-300 w-[250px] mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-[13px] border-b pb-1 w-full">Үйлдвэрлэгч</h1>
        <FaMedal color="orange" size={30} />
      </div>
      <div className="flex items-center gap-3">
        {products && (
          <h1 className="text-mainColor font-bold">{products.name} </h1>
        )}

        <div className="text-white w-max bg-green-500 rounded-full p-1">
          <FaCheck size={10} />
        </div>
      </div>
      {products && (
        <p className="text-[13px] text-gray-400">{products.address}</p>
      )}

      <div className="flex flex-col items-center mt-3 border p-1 shadow text-[13px] text-gray-500">
        <div className="flex">{renderStar()}</div>

        <span>(0 Хэрэглэгчийн сэтгэгдэл)</span>
      </div>

      <div className="flex border mt-2 p-2 items-center justify-around">
        <h1 className="text-[13px]">
          Дэлгүүрээр <br /> зочлох
        </h1>

        <div className="flex gap-2">
          <FaFacebookF />
          <FaGoogle />
          <FaTwitter />
          <TfiYoutube />
        </div>
      </div>
    </div>

      {/*** Нийлүүлэгчийн ангиллууд ***/}
      <div className="flex flex-col my-3 border rounded-md shadow mt-4 w-[250px]">
        <h1 className="border-b w-full text-mainGray p-2">
          Нийлүүлэгчийн ангиллууд
        </h1>
      
          <span className="text-[12px] text-mainGray p-4">
             Test
          </span>
        
      </div>

      {/*** Нийлүүлэгчийн ангиллууд ***/}

        
      </div>
    </div>
  );
};

export default ShopDetailPage;
