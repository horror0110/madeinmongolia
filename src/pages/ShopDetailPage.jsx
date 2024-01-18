import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { ProductService } from "../service/ProductService";
import { Link, useParams } from "react-router-dom";
import { FaMedal } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import datajson from "../utils/product.json";
import ShopDetailTemp from "../components/shopPage/ShopDetailTemp";
import { Paginator } from "primereact/paginator";

const ShopDetailPage = () => {
  const links = [
    {
      id: 1,
      title: "Нүүр хуудас",
      url: "",
    },
    {
      id: 2,
      title: "Бидний тухай",
      url: "/about",
    },
    {
      id: 3,
      title: "Их зарагдсан",
      url: "/top_selling",
    },
    {
      id: 4,
      title: "Бүх бүтээгдэхүүн",
      url: "/all_products",
    },
  ];
  const params = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    ProductService.getShopDetail(params.name).then((products) => {
      setData(products);
    });
  }, [params.name]);

  const products = data[0];

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    products && (
      <div>
        <Navbar />

        <div className="mt-10">
          <div className="mx-10 2xl:mx-60 xl:mx-20">
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
                <FaFacebookF />
              </div>
            </div>
          </div>

          {/** */}

          <div className="flex  items-center gap-8 mt-10 mb-16 border-t pt-3 px-10 2xl:px-60 xl:px-20 ">
            {links.map((link) => (
              <Link
                className="text-[13px] font-semibold text-buttonDarkGray "
                to={`/shops/visit/${products.id}${link.url}`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/****/}
          <div className="mx-10 2xl:mx-60 xl:mx-20 flex gap-10">
            <div>
              <div className="border rounded-md p-3 bg-gray-100 border-gray-300 w-[300px]">
                <div className="flex justify-between items-center">
                  <h1 className="text-[13px] border-b pb-1 w-full">
                    Үйлдвэрлэгч
                  </h1>
                  <FaMedal color="orange" size={30} />
                </div>
                <div className="flex items-center gap-3">
                  {products && (
                    <h1 className="text-mainColor font-bold">
                      {products.name}{" "}
                    </h1>
                  )}

                  <div className="text-white w-max bg-green-500 rounded-full p-1">
                    <FaCheck size={10} />
                  </div>
                </div>
                {products && (
                  <p className="text-[13px] text-gray-400">
                    {products.address}
                  </p>
                )}

                <div className="flex border mt-2 p-2 items-center justify-around">
                  <div className="flex gap-2">
                    <FaFacebookF />
                    <FaGoogle />
                    <FaTwitter />
                    <TfiYoutube />
                  </div>
                </div>
              </div>

              {/*** */}

              {/*** Нийлүүлэгчийн ангиллууд ***/}
              <div className="flex flex-col my-3 border rounded-md shadow mt-4 w-[300px] ">
                <h1 className="border-b w-full text-mainGray p-2">
                  Нийлүүлэгчийн ангиллууд
                </h1>

                <span className="text-[12px] text-mainGray p-4">Test</span>
              </div>

              {/*** Нийлүүлэгчийн ангиллууд ***/}
            </div>
            <div>
              <h1 className="mb-3 text-lg font-semibold">
                Шинээр нэмэгдсэн бараа
              </h1>

              <div className="grid grid-cols-4 gap-3 border-t pt-10">
                {datajson.map((product, index) => (
                  <ShopDetailTemp product={product} />
                ))}
              </div>
            </div>
          </div>
          <div className="card my-10">
            <Paginator
              first={first}
              rows={rows}
              totalRecords={120}
              onPageChange={onPageChange}
              className="border w-max mx-auto"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default ShopDetailPage;
