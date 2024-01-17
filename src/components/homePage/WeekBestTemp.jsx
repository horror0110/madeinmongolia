import React from "react";
import { Link } from "react-router-dom";

const WeekBestTemp = ({ product }) => {
  return (
    <Link to={`/product/${product.slug}`}>
      <img
        className="transform transition duration:500 hover:scale-105"
        src={`https://madeinmongolia.asia/${product.photo}`}
        alt=""
      />
    </Link>
  );
};

export default WeekBestTemp;
