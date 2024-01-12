import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Status from "../components/cartPage/Status";
import WarningCart from "../components/cartPage/WarningCart";
import data from "../utils/product.json";
import { FaRegTrashAlt } from "react-icons/fa";
import CheckoutSidebar from "../components/cartPage/CheckoutSidebar";

const CartPage = () => {
  const [value, setValue] = useState(1);

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
  return (
    <div>
      <Navbar />
      <div className="mt-10">
        {/** status ***/}
        <Status />

        {/** Анхааруулга */}
        <WarningCart />

        <div className="flex justify-center mx-28 my-10">
          <div className="w-[65%]">
            <table>
              <tr className="text-[10px] font-bold text-darkGray border-b ">
                <td></td>
                <td align="" className="pb-2">
                  БҮТЭЭГДЭХҮҮН
                </td>
                <td align="" className="pb-2">
                  {" "}
                  ҮНЭ
                </td>
                <td align="" className="pb-2">
                  {" "}
                  ТОО ШИРХЭГ
                </td>
                <td align="" className="pb-2">
                  {" "}
                  ТӨЛӨХ ДҮН
                </td>
              </tr>

              {data.map((item, index) => (
                <>
                  <tr className="" key={index}>
                    <td className="py-5 pr-3" align="">
                      <img src={item.image[0]} alt="" width={50} height={50} />
                    </td>
                    <td align="" className="pr-40">
                      {item.title}
                    </td>
                    <td align="" className="text-[14px] font-bold">
                      {item.price}
                    </td>
                    <td align="">
                      {/*** increase decrease */}
                      <div className="flex items-center mx-3 border w-max">
                        <button
                          className="bg-mainColor text-white px-4 py-2 rounded"
                          onClick={() => decreaseCount(index)}
                        >
                          -
                        </button>
                        <input
                          min={1}
                          value={value}
                          type="text"
                          className="w-[40px] text-[12px] text-center"
                          onChange={(e) => handleChange(e, index)}
                        />
                        <button
                          className="bg-mainColor text-white px-4 py-2 rounded"
                          onClick={() => increaseCount(index)}
                        >
                          +
                        </button>
                      </div>
                      {/*** increase decrease */}
                    </td>
                    <td align="" className="text-[14px] font-bold">
                      {item.price}
                    </td>
                  </tr>

                  <tr>
                    <td
                      colSpan={5}
                      align="end"
                      className="cursor-pointer pr-5   bg-gray-200 w-full text-[14px] font-[300]"
                    >
                      <div className="text-graygray flex items-center gap-1 justify-end">
                        <FaRegTrashAlt />

                        <button>Устгах</button>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </table>
          </div>

          <div className="w-[35%] ">
            <CheckoutSidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
