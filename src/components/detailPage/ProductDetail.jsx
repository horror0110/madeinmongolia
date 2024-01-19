import React, {
  useState,
  useContext,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import YellowCard from "./YellowCard";
import GrayCard from "./GrayCard";
import StorePay from "./StorePay";
import Warning from "./Warning";
import { IoIosCart } from "react-icons/io";
import { IoReload } from "react-icons/io5";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { GlobalContext } from "../../context/GlobalContext";
import thousandify from "thousandify";
import "react-loading-skeleton/dist/skeleton.css";


const ProductDetail = ({ product, loading }) => {
  const [value, setValue] = useState(1);

  const { addCart } = useContext(GlobalContext);

  const products = product[0];

  const [imageActive, setImageActive] = useState(0);

  const increaseCount = () => {
    setValue((prev) => parseInt(prev) + 1);
  };

  const decreaseCount = () => {
    if (value > 1) {
      setValue((prev) => parseInt(prev) - 1);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const calculateTotalPrice = () => {
    const total = products.calculable_price * value;

    return total;
  };

  return (
    products && (
      <div className="flex justify-center gap-10 items-start mt-5">
        {/**** detail banner */}

        <div className="w-[50%]">
          <div className="">
            {products && (
              <TransformWrapper>
                <TransformComponent>
                  <img
                    src={`https://madeinmongolia.asia/${products.photos[imageActive]}`}
                    alt="test"
                    className=""
                  />
                </TransformComponent>
              </TransformWrapper>

              //  `https://madeinmongolia.asia/${products.photos[imageActive]}`,
            )}
          </div>

          <div className="flex mt-5 gap-2">
            {products &&
              products.photos.map((image, index) => (
                <img
                  onClick={() => setImageActive(index)}
                  key={index}
                  src={`https://madeinmongolia.asia/${image}`}
                  alt=""
                  width={70}
                  className={
                    imageActive == index
                      ? `rounded-md border-[2px] border-mainColor`
                      : `rounded-md`
                  }
                  height={70}
                />
              ))}
          </div>
        </div>

        {/*** detail banner ***/}

        {/*** detail description ***/}

        <div className=" flex flex-col w-[50%] ">
          {products && (
            <h1 className="font-semibold text-[22px] text-mainGray mb-10">
              {products.name}
            </h1>
          )}

          {/*** made by ***/}
          <div className="flex gap-2">
            {products && (
              <img
                src={`https://madeinmongolia.asia/${products.shop_logo}`}
                className="border p-3"
                width={70}
                height={70}
              />
            )}

            <span className="flex flex-col text-gray-500 text-[13px]">
              Үйлдвэрлэгч:{" "}
              {products && (
                <span className="text-black font-medium">
                  {products.shop_name}
                </span>
              )}
            </span>
          </div>

          {/*** made by ***/}

          <div className="flex flex-col mt-10">
            <span className="text-[13px]">Үнэ:</span>
            {products && (
              <span className="text-mainColor text-[26px] font-semibold flex items-center gap-1">
                {products.main_price}
                <span className="text-gray-500 text-[13px] font-[300]">
                  /ширхэг
                </span>
              </span>
            )}
            {products.choice_options[0] && (
              <div className="flex flex-col gap-1 mt-10 cursor-pointer">
                <div className="mainGray text-[13px] ">Хэмжээ:</div>
                <div className="flex items-end gap-2">
                  {products.choice_options[0].options.map((el, index) => (
                    <div
                      key={index}
                      className="font-[500] text-[14px] border rounded-sm px-3 py-1 border-mainColor w-max text-mainColor"
                    >
                      {el}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 mt-8 w-full">
              {/** yellow card ***/}

              <YellowCard product={products} />

              {/** yellow card ***/}

              {/*** gray card ***/}

              <GrayCard />

              {/*** gray card ***/}
            </div>

            {/******/}
            <div className="flex flex-col gap-1 mt-5">
              <span className="text-[13px] text-mainGray">Нийт үнэ:</span>

              {products && (
                <span className="text-mainColor text-2xl font-bold flex items-center gap-1">
                  {thousandify(calculateTotalPrice())}
                  {/* <span className="text-gray-500 text-[15px] font-normal"></span> */}
                </span>
              )}
            </div>

            {/*** storepay ***/}
            <StorePay />
            {/*** storepay ***/}

            <div className="flex items-center gap-2 w-full">
              {/** INCREASE AND DECREASE */}

              <div className="flex items-center w-full">
                <button
                  className="bg-mainColor text-white px-4 py-2 rounded"
                  onClick={decreaseCount}
                >
                  -
                </button>
                <input
                  min={1}
                  value={value}
                  type="text"
                  className=" text-xl text-center w-full"
                  onChange={handleChange}
                />
                <button
                  className="bg-mainColor text-white px-4 py-2 rounded"
                  onClick={increaseCount}
                >
                  +
                </button>
              </div>

              {/** INCREASE AND DECREASE */}

              {/*** BUTTONS ***/}
              <button className="btn w-[40%] bg-mainColor text-white">
                <IoIosCart />
                Худалдаж Авах
              </button>
              <button
                onClick={() => addCart(products, value)}
                className="btn bg-white border-mainColor border-[2px] text-black w-[35%]"
              >
                <IoIosCart />
                Сагсанд Нэмэх
              </button>

              {/*** BUTTONS ***/}
            </div>

            {/***** */}
            <div className="mt-5 font-bold text-[13px] flex items-center  gap-20">
              <Link to="" className="flex items-center gap-1">
                <CiHeart />
                Бүтээгдэхүүнийг хадгалах
              </Link>

              <Link to="" className="flex items-center gap-1">
                <IoReload />
                Бүтээгдэхүүнийг харьцуулах
              </Link>
            </div>

            {/** Санамж */}

            <Warning />

            {/** Санамж */}

            {/*** description */}
            <div className="my-10 text-[13px] text-mainGray">
              <h1>Тайлбар:</h1>

              <div dangerouslySetInnerHTML={{ __html: products.description }} />
            </div>

            {/*** description */}

            <div className="flex flex-col gap-1">
              <span className="text-[14px]">Хуваалцах:</span>
              <div className="flex gap-1 text-white">
                <div className="bg-blue-800 p-2">
                  <FaFacebookF />
                </div>

                <div className="bg-blue-500 p-2">
                  <FaTwitter />
                </div>
              </div>
            </div>

            {/** share ***/}
          </div>
        </div>

        {/*** detail description ***/}
      </div>
    )
  );
};

export default ProductDetail;
