import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const GrayCard = () => {
  return (
    <div className="flex flex-col gap-2 bg-gray-200 p-3 rounded-md w-full ">
      <div className="flex items-center  gap-2">
        <CiDeliveryTruck size={20} />
        <span className="font-bold text-darkGray text-[12px]">Хүргэгдэх хугацаа</span>
      </div>

      <span className="text-[13px] text-darkGray">24-48 цаг</span>
    </div>
  );
};

export default GrayCard;
