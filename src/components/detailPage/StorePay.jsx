import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const StorePay = () => {
  return (
    <div className="my-3 flex justify-between  w-full items-center gap-10 border p-3 rounded-xl hover:shadow-2xl bg-gray-300">
      <div className="flex items-center gap-10">
        <img
          src="https://madeinmongolia.asia/assets/frontend/images/storepay.png"
          alt=""
          className="bg-white p-1 rounded-md"
          width={60}
          height={60}
        />
        <p className="text-[14px] text-mainGray">
          StorePay ашиглан ямар ч хүүгүй шимтгэлгүй 4 <br /> хуваан төлөл
          боломжтой
        </p>
      </div>

      <FaAngleRight className="mr-3" size={12} color="blue" />
    </div>
  );
};

export default StorePay;
