import React from 'react'
import { FaCheck } from "react-icons/fa6";

const YellowCard = ({product}) => {
  return (
    <div className="flex flex-col gap-2 border-yellow-600 border rounded-md p-3 w-[250px] bg-pink-100">
    <div className="flex items-center gap-2">
      <div className="text-white bg-green-500 rounded-full p-1">
        <FaCheck size={10}/>
      </div>
      <span className="text-[14px]">{product.balance} ширхэг бэлэн байна</span>
    </div>

    <div className="items-center flex gap-2">
         <img src="https://madeinmongolia.asia/assets/frontend/images/icons/chat_icon.gif" width={23} height={23} />
         <span className="text-yellow-500 font-bold text-[14px]">Холбоо барих</span>
    </div>
  </div>
  )
}

export default YellowCard