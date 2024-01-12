import React from "react";

const CheckoutSidebar = () => {
  return (
    <>
      <div className="border py-5 rounded-lg shadow text-buttonGray  border-gray-200">
        <div className="flex items-center border-b pb-5 justify-between">
          <h1 className="text-[24px] px-5 text-darkColor font-extralight">
            Захиалгын <br /> мэдээлэл
          </h1>

          <div className="bg-greenColor  mr-5 text-center text-white  text-[10px] font-[400] w-max rounded-md px-2 py-1">
            1 Бараа
          </div>
        </div>

        <div className="flex flex-col  gap-5 px-5">
          <div className="flex border-b py-5   items-center text-darkGray text-[10px] font-bold  justify-between">
            <h1>БҮТЭЭГДЭХҮҮН</h1>

            <h1>ТӨЛӨХ ДҮН</h1>
          </div>

          <div className="flex items-center  justify-between">
            <h1 className="font-bold text-[14px]">TEST PRODUCT × 2</h1>

            <h1 className="text-[14px] font-bold">1,000₮</h1>
          </div>

          <div className="flex items-center text-[12px]  justify-between">
            <h1>НИЙТ</h1>

            <h1 className="text-[14px] font-semibold">1,000₮</h1>
          </div>

          <div className="flex text-[12px]  items-center  justify-between">
            <h1>НӨАТ</h1>

            <h1>0₮</h1>
          </div>

          <div className="flex  text-[12px] items-center  justify-between">
            <h1>НИЙТ ХҮРГЭЛТИЙН ТӨЛБӨР</h1>

            <h1>0₮</h1>
          </div>

          <div className="flex  text-[12px] items-center  justify-between">
            <h1 className="font-bold">ТӨЛӨХ ДҮН</h1>

            <h1 className="font-bold text-[14px]">1,000₮</h1>
          </div>

          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center h-[38px]   justify-center">
              <input
                className="border w-[200px] rounded-md h-full px-3 py-1 placeholder:text-[14px] text-start"
                type="text"
                placeholder="Купоны код байгаа юу? Энд"
              />

              <button className="btn min-h-0 h-full text-white bg-mainColor font-[300]">
                Идэвхижүүлэх
              </button>
            </div>

            <div className="flex items-center h-[38px] justify-center">
              <input
                className="border rounded-md w-[200px]  h-full   px-3 py-1 placeholder:text-[14px] text-start"
                type="text"
                placeholder="Бэлгийн карт ашиглах энд оруулах"
              />

              <button className="btn min-h-0 h-full text-white bg-mainColor font-[300]">
                Ашиглах
              </button>
            </div>
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
