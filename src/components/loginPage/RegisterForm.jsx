import React, { useState } from "react";
import { RegisterService } from "../../service/RegisterService";

const RegisterForm = ({ setPageChoose, setPhoneValue }) => {
  const [phone, setPhone] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      phone: phone,
    };

    try {
      if (phone.trim() == "") {
        return alert("talbaruudig boglono uu");
      }

      RegisterService.sendOTP(data).then((result) => {

        console.log(result)
        if (result.result) {
          setPageChoose("OTP");

          setPhoneValue(phone);
        } else {
          alert(result.message);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
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
            onChange={(e) => {
              setPhoneValue(e.target.value), setPhone(e.target.value);
            }}
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
            <button
              onClick={() => setPageChoose("login")}
              className="btn my-5 bg-mainColor text-white flex-2"
            >
              Буцах
            </button>

            <button
              onClick={handleRegister}
              className="btn my-5 bg-mainColor text-white flex-1"
            >
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
