import React from "react";
import NewProductTemp from "../../components/homePage/NewProductTemp";

const NewProducts = ({ newProducts, header, nextButton }) => {
  return (
    <div className="mt-3  mx-10  lg:mx-20 xl:mx-20 2xl:mx-60">
      {/* {header && <img src={header} alt="" className="my-5" />} */}

      <div className="grid md:grid-cols-5 grid-cols-2 gap-2">
        {newProducts &&
          newProducts.map((product, index) => (
            <NewProductTemp key={product.id} product={product} />
          ))}
      </div>

      {/* {nextButton && (
        <img
          className="mt-3"
          src="https://madeinmongolia.asia/uploads/image_names/web_images/new_products_footer/mzFva9xtYCa77qWV9TmL8pqY4pdhm0oZbqgJlJUK.jpg"
        />
      )} */}
    </div>
  );
};

export default NewProducts;
