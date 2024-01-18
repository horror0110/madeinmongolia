import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import WarningCart from "../components/cartPage/WarningCart";

const TrackOrder = () => {
  return (
    <div>
      <Navbar />
      <WarningCart />

      <div className="mx-10 xl:mx-20 2xl:mx-60 my-10 text-darkGray mb-40">
        <h1 className="font-semibold mb-5">Захиалга Шалгах</h1>
        <p className="bg-gray-100 p-3">Захиалгын мэдээлэл</p>

        <div className="flex gap-32 items-center mt-5">
          <span className="text-[12.8px]">Захиалгын дугаар *</span>

          <input
            type="text"
            placeholder="Захиалгын дугаар"
            className="input input-bordered h-9 w-full"
          />
        </div>

        <div className="flex justify-end">
          <button className="btn text-white bg-mainColor mt-10 w-max   ">
            Захиалга шалгах
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrackOrder;
