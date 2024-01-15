import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Status from "../components/cartPage/Status";
import WarningCart from "../components/cartPage/WarningCart";
import { FaRegTrashAlt } from "react-icons/fa";
import CheckoutSidebar from "../components/cartPage/CheckoutSidebar";
import { GlobalContext } from "../context/GlobalContext";
import thousandify from "thousandify";

const CartPage = () => {
  const { basket, setBasket } = useContext(GlobalContext);
  const [empty, setEmpty] = useState(false);

  const increaseCount = (item) => {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.map((el) =>
        el.name === item.name ? { ...el, quantity: el.quantity + 1 } : el
      );
      localStorage.setItem("cart", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
  };

  const decreaseCount = (item) => {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.map((el) =>
        el.name === item.name && el.quantity > 1
          ? { ...el, quantity: el.quantity - 1 }
          : el
      );
      localStorage.setItem("cart", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
  };

  const handleChange = (e, item) => {
    const inputValue = e.target.value.trim();
    const newQuantity = inputValue !== "" ? parseInt(inputValue, 10) : null;

    if (isNaN(newQuantity) && inputValue !== "") {
      return;
    }

    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.map((el) =>
        el.name === item.name ? { ...el, quantity: newQuantity } : el
      );
      localStorage.setItem("cart", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
  };

  const deleteItem = (item) => {
    const updatedProducts = basket.filter((el) => item.id !== el.id);

    setBasket(updatedProducts);

    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <Navbar />
      <div className="mt-10">
        {basket.length !== 0 ? (
          <>
            {/** status ***/}
            <Status />

            {/** Анхааруулга */}
            <WarningCart />

            <div className="flex gap-5 justify-center mx-28 my-10">
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

                  {basket.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr className="">
                        <td className="py-5 pr-3" align="">
                          <img
                            src={`https://madeinmongolia.asia/${item.image}`}
                            alt=""
                            width={50}
                            height={50}
                          />
                        </td>
                        <td align="" className="pr-40">
                          {item.name}
                        </td>
                        <td align="" className="text-[14px] font-bold">
                          {item.price}
                        </td>
                        <td align="">
                          {/*** increase decrease */}
                          <div className="flex items-center mx-3 border w-max">
                            <button
                              className="bg-mainColor text-white px-4 py-2 rounded"
                              onClick={() => decreaseCount(item)}
                            >
                              -
                            </button>
                            <input
                              min={1}
                              value={item.quantity}
                              type="text"
                              className="w-[40px] text-[12px] text-center"
                              onChange={(e) => handleChange(e, item)}
                            />
                            <button
                              className="bg-mainColor text-white px-4 py-2 rounded"
                              onClick={() => increaseCount(item)}
                            >
                              +
                            </button>
                          </div>
                          {/*** increase decrease */}
                        </td>
                        <td align="" className="text-[14px] font-bold">
                          {thousandify(item.calculable_price * item.quantity)}
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

                            <button onClick={() => deleteItem(item)}>
                              Устгах
                            </button>
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </table>
              </div>

              <div className="w-[35%] ">
                <CheckoutSidebar />
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center my-10">
            <h1 className="font-semibold">Таны сагс хоосон байна</h1>
            <img
              src="https://madeinmongolia.asia/assets/frontend/images/not_found.gif"
              alt=""
            />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
