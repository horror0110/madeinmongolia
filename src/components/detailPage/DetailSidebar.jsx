import React from "react";
import Made from "./Made";
import GoodProducts from "./GoodProducts";

const DetailSidebar = ({ renderStar, topSellers, realData }) => {
  return (
    <div className="">
      {/***  Үйлдвэрлэгч ***/}

      <Made renderStar={renderStar} realData={realData[0]} />

      {/***  Үйлдвэрлэгч ***/}

      {/*** Нийлүүлэгчийн ангиллууд ***/}
      <div className="flex flex-col my-3 border rounded-md shadow mt-4 w-[250px]">
        <h1 className="border-b w-full text-mainGray p-2">
          Нийлүүлэгчийн ангиллууд
        </h1>
        {realData[0] && (
          <span className="text-[12px] text-mainGray p-4">
            {realData[0].categories.category.name}
          </span>
        )}
      </div>

      {/*** Нийлүүлэгчийн ангиллууд ***/}

      {/*** Нийлүүлэгчийн эрэлттэй бараа ***/}

      <div className="border w-[250px]">
        <h1 className="border-b p-3 text-darkGray">
          Нийлүүлэгчийн эрэлттэй бараа
        </h1>
        <div className="p-3 flex flex-col gap-5">
          {topSellers.map((product) => (
            <div key={product.id}>
              <GoodProducts product={product} renderStar={renderStar} />
            </div>
          ))}
        </div>
      </div>

      {/*** Нийлүүлэгчийн эрэлттэй бараа ***/}
    </div>
  );
};

export default DetailSidebar;
