import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import thousandify from "thousandify";

const CheckoutSidebar = () => {
  const { basket } = useContext(GlobalContext);

  const totalPrice = basket.reduce((total, item) => {
    return total + item.calculable_price * item.quantity;
  }, 0);

  return (
    <>
      <div className="border py-5 rounded-lg shadow text-buttonGray  border-gray-200">
        <div className="flex items-center border-b pb-5 justify-between">
          <h1 className="text-[24px] px-5 text-darkColor font-extralight">
            Захиалгын <br /> мэдээлэл
          </h1>

          <div className="bg-greenColor  mr-5 text-center text-white  text-[10px] font-[400] w-max rounded-md px-2 py-1">
            {basket.length} Бараа
          </div>
        </div>

        <div className="flex flex-col  gap-5 px-5">
          <div className="flex border-b py-5   items-center text-darkGray text-[10px] font-bold  justify-between">
            <h1>БҮТЭЭГДЭХҮҮН</h1>

            <h1>ТӨЛӨХ ДҮН</h1>
          </div>
          {basket.map((el, index) => (
            <div key={el.id} className="flex items-center  justify-between">
              <h1 className="font-bold text-[14px]">
                {el.name} × {el.quantity}
              </h1>

              <h1 className="text-[14px] font-bold">
                {thousandify(el.calculable_price * el.quantity)}
              </h1>
            </div>
          ))}

          <div className="flex  text-[12px] items-center  justify-between">
            <h1 className="font-bold">ТӨЛӨХ ДҮН</h1>

            <h1 className="font-bold text-[14px]">{thousandify(totalPrice)}</h1>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center items-center gap-2 mt-5 text-white text-[12px] font-bold">
        <button className="bg-mainColor px-10 py-3 rounded-md w-full">
          Буцах
        </button>
        <button className="bg-coralColor px-10 py-3 rounded-md w-full">
          Үргэлжлүүлэх
        </button>
      </div>
    </>
  );
};

export default CheckoutSidebar;
