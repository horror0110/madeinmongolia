import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaMedal } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Made = ({renderStar}) => {

    
  return (
    <div className="border rounded-md p-3 bg-gray-100 border-gray-300 w-[250px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[13px] border-b pb-1 w-full">Үйлдвэрлэгч</h1>
            <FaMedal color="orange" size={30} />
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-mainColor font-bold">Оньсон хүү </h1>
            <div className="text-white w-max bg-green-500 rounded-full p-1">
              <FaCheck size={10} />
            </div>
          </div>

          <p className="text-[13px] text-gray-400">
            Барс захын зүүн талд "Монголд үйлдвэрлэв" төв 1 давхарт
          </p>

          <div className="flex flex-col items-center mt-3 border p-1 shadow text-[13px] text-gray-500">
            <div className="flex">{renderStar()}</div>

            <span>(0 Хэрэглэгчийн сэтгэгдэл)</span>
          </div>

          <div className="flex border mt-2 p-2 items-center justify-around">
            <h1 className="text-[13px]">Дэлгүүрээр <br/> зочлох</h1>

            <div className="flex gap-2">
              <FaFacebookF />
              <FaGoogle />
              <FaTwitter />
              <TfiYoutube />
            </div>
          </div>
        </div>
  )
}

export default Made