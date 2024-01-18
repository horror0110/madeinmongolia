import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewProductsSkeleton = () => {
  return (
    <div className="mt-3  mx-10  lg:mx-20 xl:mx-20 2xl:mx-60">
      <div className="grid md:grid-cols-5 grid-cols-2 gap-25">
        {Array.from({ length: 15 }).map((el, index) => (
          <Skeleton key={index} width={250} height={250} />
        ))}
      </div>
    </div>
  );
};

export default NewProductsSkeleton;
