import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const NewProductTemp = ({ product }) => {
  const { getModal } = useContext(GlobalContext);

  return (
    <div className="relative flex flex-col max-w-[250px] gap-1 mx-auto border shadow  p-3 hover:shadow-2xl">
      <Link to={`/product/${product.slug}`} className="w-full h-[230px]">
        <img
          src={`https://madeinmongolia.asia/${product.thumbnail_image}`}
          className="object-cover h-full w-full"
        />
      </Link>

      {product.new && (
        <span className="text-white bg-p[#009f7f] w-max absolute left-4 top-5 text-[13px] p-1 rounded-md">
          ШИНЭ
        </span>
      )}

      <div className="ml-2 flex flex-col">
        <h1 className="font-bold text-[14px]">{product.name}</h1>
        <span className="text-xs my-1 text-gray-500">
          {product.subsubcategory}
        </span>

        <div className="flex justify-between items-center">
          <span className="text-mainColor font-bold">{product.base_price}</span>

          <div
            onClick={() => getModal(product.id)}
            className="border border-gray-300 p-1 hover:bg-[#009f7f] hover:text-white text-[#009f7f] "
          >
            <FaPlus size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductTemp;
