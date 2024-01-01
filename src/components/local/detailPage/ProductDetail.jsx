import React, { useEffect, useState } from "react";
import YellowCard from "./YellowCard";
import GrayCard from "./GrayCard";
import StorePay from "./StorePay";
import Warning from "./Warning";
import { IoIosCart } from "react-icons/io";
import { IoReload } from "react-icons/io5";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import ReactImageMagnify from "react-image-magnify";

const ProductDetail = ({ product }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="mt-5 flex gap-10">
      {/**** detail banner */}
      <div>
        <StickyBox offsetTop={0} offsetBottom={0}>
          <div>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  src: product.image[0],
                  width: 500,
                  height: 500,
                },
                largeImage: {
                  src: product.image[0],
                  width: 800,
                  height: 800,
                },
              }}
            />

            <div className="flex mt-5 gap-2">
              {product.image.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  width={80}
                  className="rounded-md"
                  height={80}
                />
              ))}
            </div>
          </div>
        </StickyBox>
      </div>

      {/*** detail banner ***/}

      <div className=" flex flex-col">
        <h1 className="font-bold text-xl mb-10">{product.title}</h1>

        {/*** made by ***/}
        <div className="flex gap-2">
          <img
            src={product.made.image}
            className="border p-3"
            width={70}
            height={70}
          />
          <span className="flex flex-col text-gray-500 text-[14px]">
            Үйлдвэрлэгч:{" "}
            <span className="text-black text-[17px]">{product.made.title}</span>
          </span>
        </div>

        {/*** made by ***/}

        <div className="flex flex-col mt-10">
          <span>Үнэ:</span>
          <span className="text-mainColor text-2xl font-bold flex items-center gap-1">
            {product.price}
            <span className="text-gray-500 text-[15px] font-normal">
              /ширхэг
            </span>
          </span>

          <div className="flex items-center gap-2 mt-8">
            {/** yellow card ***/}

            <YellowCard product={product} />

            {/** yellow card ***/}

            {/*** gray card ***/}

            <GrayCard />

            {/*** gray card ***/}
          </div>

          {/******/}
          <div className="flex flex-col gap-1 mt-5">
            <span>Нийт үнэ:</span>
            <span className="text-mainColor text-2xl font-bold flex items-center gap-1">
              {product.price}
              <span className="text-gray-500 text-[15px] font-normal"></span>
            </span>
          </div>

          {/*** storepay ***/}
          <StorePay />
          {/*** storepay ***/}

          <div className="flex items-center gap-2">
            {/** INCREASE AND DECREASE */}

            <div className="flex items-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={decreaseCount}
              >
                -
              </button>
              <span className="mx-4 text-xl">{count}</span>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={increaseCount}
              >
                +
              </button>
            </div>

            {/** INCREASE AND DECREASE */}

            {/*** BUTTONS ***/}
            <button className="btn bg-mainColor text-white">
              <IoIosCart />
              Худалдаж Авах
            </button>
            <button className="btn bg-white border-mainColor border-[2px] text-black">
              <IoIosCart />
              Сагсанд Нэмэх
            </button>

            {/*** BUTTONS ***/}
          </div>

          {/***** */}
          <div className="mt-5 font-semibold text-[14px] flex items-center  gap-20">
            <Link className="flex items-center gap-1" to="">
              <CiHeart />
              Бүтээгдэхүүнийг хадгалах
            </Link>

            <Link className="flex items-center gap-1" to="">
              <IoReload />
              Бүтээгдэхүүнийг харьцуулах
            </Link>
          </div>

          {/** Санамж */}

          <Warning />

          {/** Санамж */}

          {/** share ***/}

          <div className="flex flex-col gap-1 mt-5">
            <span className="text-[14px]">Хуваалцах:</span>
            <div className="flex gap-1 text-white">
              <div className="bg-blue-800 p-2">
                <FaFacebookF />
              </div>

              <div className="bg-blue-500 p-2">
                <FaTwitter />
              </div>
            </div>

            <div></div>
          </div>

          {/** share ***/}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
