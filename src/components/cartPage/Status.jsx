import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa6";

const Status = () => {
  return (
    <div className="flex items-end gap-20 justify-center">
      <div className="flex flex-col items-center gap-1 text-mainColor">
        <FiShoppingCart size={30} />
        <div className="text-opacityGray text-[14px] font-[300]">
          1. Миний Сагс
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 text-mainColor">
        <CiDeliveryTruck size={35} />
        <div className="text-opacityGray text-[14px] font-[300]">
          2. Хүргэлтийн Мэдээлэл
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 text-mainColor">
        <CiDeliveryTruck size={35} />
        <div className="text-opacityGray text-[14px] font-[300]">
          3. Хүргэлтийн Төрөл Сонгох
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 text-mainColor">
        <FaRegCreditCard size={30} />
        <div className="text-opacityGray text-[14px] font-[300]">
          4. Төлбөрийн Төрөл
        </div>
      </div>
    </div>
  );
};

export default Status;
