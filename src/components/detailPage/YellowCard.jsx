import React from "react";
import { FaCheck } from "react-icons/fa6";

const YellowCard = ({ product }) => {
  return (
    <div className="flex flex-col gap-2 border-yellow-600 border rounded-md p-3 bg-gg w-full">
      <div className="flex items-center gap-2">
        <div className="text-white bg-green-500 rounded-full p-1">
          <FaCheck size={10} />
        </div>
        {product && (
          <span className="text-[13px]">
            {product.current_stock} ширхэг бэлэн байна
          </span>
        )}
      </div>

      <div className="items-center flex gap-2">
        <img
          src="https://madeinmongolia.asia/assets/frontend/images/icons/chat_icon.gif"
          width={23}
          height={23}
        />
        <span className="text-yellowColor font-bold text-[12px]">
          Холбоо барих
        </span>
      </div>
    </div>
  );
};

export default YellowCard;
