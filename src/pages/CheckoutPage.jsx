import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Status from "../components/cartPage/Status";
import WarningCart from "../components/cartPage/WarningCart";
import CheckoutSidebar from "../components/cartPage/CheckoutSidebar";
import address from "../utils/address.json";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import Footer from "../components/Footer";

const CheckoutPage = () => {
  const data = [
  {
      id: 1,
      title: "Хүргэхийн өмнө залгах",
    },
    {
      id: 2,
      title: "Нэмэлт анхааруулга",
    },
    {
      id: 3,
      title: "Нялх хүүхэдтэй",
    },
  ];
  const [clickedRadio, setClickedRadio] = useState(0);
  const [buttonClasses, setButtonClasses] = useState(
    Array(data.length).fill("border px-8 py-2 rounded-md border-darkGray")
  );
  const [emptyArr, setEmptyArr] = useState([]);

  const handleClick = (title, index) => {
    setEmptyArr((prevArr) => {
      const newArr = prevArr.includes(title)
        ? prevArr.filter((el) => el !== title)
        : [...prevArr, title];

      return newArr;
    });
    setButtonClasses((prevClasses) => {
      const newClasses = [...prevClasses];
      newClasses[index] =
        prevClasses[index] === "border px-8 py-2 rounded-md border-darkGray"
          ? "bg-blue-500 flex items-center gap-1 text-white border px-8 py-2 rounded-md border-darkGray"
          : "border px-8 py-2 rounded-md border-darkGray";

      return newClasses;
    });
  };

  console.log(emptyArr);

  return (
    <div>
      <Navbar />
      <Status />
      <WarningCart />

      <div className="flex justify-center gap-10 mx-20 my-10">
        <div className="w-[65%]">
          <div className="grid grid-cols-2 gap-3 ">
            {address.map((el, index) => (
              <div
                className={
                  clickedRadio !== index
                    ? `flex items-start border p-5 gap-5 rounded-md w-full shadow`
                    : `flex items-start border p-5 gap-5 border-blue-500 rounded-md w-full shadow`
                }
              >
                <input
                  onChange={() => setClickedRadio(index)}
                  type="radio"
                  name="radio-1"
                  className={`radio border border-graygray h-[16px] w-[16px] checked:bg-blue-500`}
                  checked={clickedRadio == index ? true : false}
                />
                <div key={el.id} className=" ">
                  <div className="flex items-center gap-1">
                    <span className="text-opacityColor text-[12px]">
                      Хэрэглэгч:
                    </span>

                    <span className="text-[12px] text-opacityColor font-semibold">
                      {el.user}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-opacityColor text-[12px]">Нэр:</span>

                    <span className="text-[12px] text-opacityColor font-semibold">
                      {el.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-opacityColor text-[12px]">
                      И-мэйл:
                    </span>

                    <span className="text-[12px] text-opacityColor font-semibold">
                      {el.email}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-opacityColor text-[12px]">
                      Аймаг / Хот:
                    </span>

                    <span className="text-[12px] text-opacityColor font-semibold">
                      {el.city}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-opacityColor text-[12px]">
                      Сум / Дүүрэг:
                    </span>

                    <span className="text-[12px] text-opacityColor font-semibold">
                      {el.district}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-opacityColor text-[12px]">
                      Хороо / Баг:
                    </span>

                    <span className="text-[12px] text-opacityColor font-semibold">
                      {el.team}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-opacityColor text-[12px]">
                      Хүргэлтийн хая:
                    </span>

                    <span className="text-[12px] text-opacityColor font-semibold">
                      {el.deliveryAddress}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-opacityColor text-[12px]">Утас:</span>

                    <span className="text-[12px] text-opacityColor font-semibold">
                      {el.phone}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-opacityColor text-[12px]">
                      Нэмэлт утас:
                    </span>

                    <span className="text-[12px] text-opacityColor font-semibold">
                      {el.phone2}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*****/}

          <div className="flex border rounded-md mt-10 py-5 cursor-pointer w-[400px] mx-auto items-center flex-col text-[13px] text-darkGray">
            <FaPlus size={30} />
            <div>Шинэ хаяг нэмэх</div>
          </div>

          {/****/}

          <div className="mt-10">
            <h1 className="text-darkGray font-bold text-[18px] border-b-[2px] border-b-black pb-2 w-max">
              Нэмэлт анхааруулга
            </h1>

            <div className="flex items-center gap-5 text-[13px] mt-5">
              {data.map((el, index) => (
                <button
                  onClick={() => handleClick(el.title, index)}
                  key={el.id}
                  className={`${buttonClasses[index]} relative`}
                >
                  {emptyArr.includes(el.title) && (
                    <FaCheck className="absolute left-2" />
                  )}
                  {el.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[35%]">
          <CheckoutSidebar />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CheckoutPage;
