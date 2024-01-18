import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SuggestSkeleton = () => {
  return (
    <div className="flex gap-5">
      {Array.from({ length: 6 }).map((el, index) => (
        <Skeleton key={index} width={100} height={100} />
      ))}
    </div>
  );
};

export default SuggestSkeleton;
