import React from "react";
import { Link } from "react-router-dom";

const ShopCart = ({ data }) => {
  return (
    <div className="grid  grid-cols-4 gap-5 2xl:mx-60 xl:mx-20 mx-10 my-10">
      {data.map((product, index) => (
        <Link className="transform transition duration:500 hover:scale-105" key={index} to={product.url}>
          <img src={`https://madeinmongolia.asia/${product.photo}`} alt="" width={300} height={300} />
        </Link>
      ))}
    </div>
  );
};

export default ShopCart;
