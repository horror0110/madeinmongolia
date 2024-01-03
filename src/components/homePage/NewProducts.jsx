import React from "react";
import NewProductTemp from "../../components/homePage/NewProductTemp";
import { Link } from "react-router-dom";

const NewProducts = ({ data, header }) => {
  return (
    <div className="mt-3 md:mx-20">
      {header && <img src={header} alt="" className="my-5" />}

      <Link className="grid md:grid-cols-5 grid-cols-2 gap-2">
        {data.map((product, index) => (
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
