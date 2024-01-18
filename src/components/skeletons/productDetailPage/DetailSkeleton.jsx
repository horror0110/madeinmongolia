import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailSkeleton = () => {
  return (
    <div className="flex justify-center gap-10 items-start mt-5">
      <div>
        <Skeleton height={700} width={700} />
      </div>

      <div className="w-full">
        <Skeleton height={110} />
        <div className="mt-5">
          <Skeleton height={50} width={300} />
        </div>

        <div className="mt-5">
          <Skeleton height={110} />
        </div>
        <div className="mt-5">
          <Skeleton height={50} width={300} />
        </div>
        <div className="mt-5">
          <Skeleton height={80} />
        </div>
        <div className="mt-5">
          <Skeleton height={80} />
        </div>
        <div className="mt-5">
          <Skeleton height={110} />
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
