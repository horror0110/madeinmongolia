import React from "react";
import products from "../../../utils/product.json";

import NewProductTemp from "../../shared/NewProductTemp";
import { Link } from "react-router-dom";

const NewProducts = () => {
  return (
    <div className="mt-3 md:mx-20">
      <h1 className="font-bold text-center text-2xl my-5">ШИНЭЭР НЭМЭГДСЭН</h1>

      <Link to="/product/1" className="grid md:grid-cols-5 grid-cols-2 gap-2">
        {products.map((product, index) => (
          <NewProductTemp key={product.id} product={product} />
        ))}
      </Link>

      <img
        className="mt-3"
        src="https://madeinmongolia.asia/uploads/image_names/web_images/new_products_footer/mzFva9xtYCa77qWV9TmL8pqY4pdhm0oZbqgJlJUK.jpg"
      />
    </div>
  );
};

export default NewProducts;
