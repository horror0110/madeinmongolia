import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ setPageChoose ,  setInputValue }) => {
  const [phone, setPhone] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      phone: phone,
    };

    try {
      if (phone.trim() == "") {
        return alert("talbaruudig boglono uu");
      }
      const res = await fetch(
        "https://madeinmongolia.asia/api/v2/auth/web/check-number",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            // Add any other required headers here
          },
        }
      );

      const isCorrect = await res.json();

      if (isCorrect.result) {
        setPageChoose("secondLogin");

        setInputValue(phone)
      } else {
        alert(isCorrect.message);
      }
    } catch (err) {
      console.log(err);
    }

    // setPageChoose("secondLogin");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-between w-[450px]">
        <div className="">
          <div className="text-opacityColor cursor-pointer text-[12px] mb-2">
            Нэвтрэх
          </div>

          <input
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Гар Утасны Дугаар"
            className="input input-bordered w-full"
          />

          <button
            onClick={handleLogin}
            className="btn my-5 bg-mainColor text-white w-full"
          >
            Үргэлжлүүлэх
          </button>

          <div className="flex text-darkGray text-[13px] mx-auto justify-center  items-center gap-1 text-center">
            <div>Шинэ хэрэглэгч болох</div>

            <Link
            to=""
              onClick={() => setPageChoose("register")}
              className="font-bold"
            >
              Бүртгүүлэх
            </Link>
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

export default LoginForm;
