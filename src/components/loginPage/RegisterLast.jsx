import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterLast = ({ setPageChoose }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  console.log(isChecked)

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-5 justify-between w-[450px]">
        <h1 className="text-[20px] text-darkGray font-[500]">Бүртгүүлэх</h1>
        <div className="">
          <div className="text-opacityColor cursor-pointer text-[12px] mb-2">
            Нэр
          </div>

          <input
            type="text"
            placeholder="Нэр"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <div className="text-opacityColor cursor-pointer text-[12px] mb-2">
            Нууц үг үүсгэх
          </div>

          <input
            type="password"
            placeholder="********"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <div className="text-opacityColor cursor-pointer text-[12px] mb-2">
            Нууц үг давтах
          </div>

          <input
            type="password"
            placeholder="********"
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex gap-3 w-full">
          <input
            checked={isChecked} 
            onChange={() => setIsChecked(!isChecked)}
            type="checkbox"
          />
          <p className="text-opacityColor text-[12.8px] w-full">
            madeinmongoia.asia -д нэвтрэх эрхээр бүртгэл үүсгэхийг зөвшөөрч
            байна
          </p>
        </div>

        <div className="flex gap-2 w-full">
          <button
            onClick={() => setPageChoose("OTP")}
            className="btn my-5 bg-mainColor text-white w-[35%]"
          >
            Буцах
          </button>

          <button className="btn my-5 bg-mainColor text-white w-[65%]">
            Бүртгүүлэх
          </button>
        </div>

        <p className="text-darkGray text-[13px] my-5 text-center">
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

export default RegisterLast;
