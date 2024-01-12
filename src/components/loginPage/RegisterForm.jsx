import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = ({setPageChoose}) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-between w-[450px]">
        <div className="">
          <div className="text-opacityColor cursor-pointer text-[12px] mb-2">
            Бүртгүүлэх
          </div>

          <input
            type="number"
            placeholder="Гар Утасны Дугаар"
            className="input input-bordered w-full"
          />

          <div className="flex items-center gap-1 justify-center mt-1">
            <span className="text-darkGray text-[13px] ">
              Та бүртгэлтэй бол
            </span>
            <button className="text-darkGray text-[13px] font-bold">
              Нэвтрэх
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={()=>setPageChoose("login")} className="btn my-5 bg-mainColor text-white flex-2">
              Буцах
            </button>

            <button className="btn my-5 bg-mainColor text-white flex-1">
              Бүртгүүлэх
            </button>
          </div>
        </div>

        <p className="text-darkGray text-[13px] my-10 text-center">
          Утасны дугаараа оруулан үргэлжлүүлэх товчийг дарснаар, эсхүл бусад
          нөхцөл /Facebook, Apple ID, Gmail гэх мэт/-ийг ашиглан
          Madeinmongolia.asia вебсайтад нэвтэрснээр Таныг тус вебсайтын
          <b> Үйлчилгээний нөхцөл</b> болон <b>Нууцлалын бодлог</b>ыг хүлээн
          зөвшөөрсөнд тооцно.
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
