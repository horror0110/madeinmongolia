import React, { useState } from "react";
import { RegisterService } from "../../service/RegisterService";

const RegisterOTP = ({ setPageChoose, phoneValue }) => {
  const [otp, setOtp] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      phone: phoneValue,
      otp: otp,
    };

    try {
      if (otp.trim() == "") {
        return alert("talbaruudig boglono uu");
      }

      RegisterService.checkOTP(data).then((result) => {
        console.log(result);
        if (result.result) {
          setPageChoose("LAST");

          // setPhoneValue(phone);
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
          <h1 className="mb-5 text-xl">Бүртгүүлэх</h1>
          <div className="text-opacityColor cursor-pointer text-[12px] mb-2">
            Гар утас
          </div>

          <input
            type="number"
            placeholder=""
            className="input input-bordered w-full"
            value={phoneValue}
          />

          <div className="text-opacityColor mt-3 cursor-pointer text-[12px] mb-2">
            OTP code
          </div>

          <input
            onChange={(e) => setOtp(e.target.value)}
            type="text"
            placeholder="****"
            className="input input-bordered w-full"
          />

          <div className="flex items-center gap-1 justify-center mt-2">
            <span className="text-darkGray text-[13px] ">
              Та бүртгэлтэй бол
            </span>
            <button
              onClick={() => setPageChoose("login")}
              className="text-darkGray text-[13px] font-bold"
            >
              Нэвтрэх
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPageChoose("register")}
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

export default RegisterOTP;
