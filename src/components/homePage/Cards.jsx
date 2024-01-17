import React from "react";
import WeekBest from "./WeekBest";

const Cart = ({ data }) => {
  return (
    <div className="my-5">
    
      <div className="">
        <WeekBest data={data} />
      </div>
    </div>
  );
};

export default Cart;
