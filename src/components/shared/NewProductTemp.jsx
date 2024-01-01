import React from 'react'
import { FaPlus } from "react-icons/fa6";

const NewProductTemp = ({product}) => {
  return (
    <div className="relative flex flex-col gap-1 mx-auto border shadow  p-3">
    <img src={product.image[0]} width={200} height={150} />
    <span className="text-white bg-[#009f7f] w-max absolute left-4 top-5 text-[13px] p-1 rounded-md">ШИНЭ</span>

    <div className="ml-2 flex flex-col">
    <h1 className="font-bold">{product.title}</h1>
    <span className="text-xs my-1 text-gray-500">{product.category}</span>

    <div className="flex justify-between items-center">
    <span className="text-mainColor font-bold">{product.price}</span>

    <div className="border border-gray-300 p-1 hover:bg-[#009f7f] hover:text-white text-[#009f7f] ">
    <FaPlus size={12}/>

    </div>


    </div>
 

    </div>
  
  </div>
  )
}

export default NewProductTemp