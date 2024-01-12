import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { LoginService } from "../../service/LoginService";

const LoginSecond = ({ setPageChoose, inputValue, setInputValue }) => {
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      phone: inputValue,
      password: password,
    };

    try {
      if (phone.trim() == "" && password.trim() == "") {
        return alert("talbaruudig boglono uu");
      }

      LoginService.login(data).then((result) => {
        if (result.result) {
          localStorage.setItem("user", JSON.stringify(result));
          navigate("/");

          window.location.reload(true);
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
          <h1 className="mb-5 text-xl">Нэвтрэх</h1>
          <div className="text-opacityColor cursor-pointer text-[12px] mb-2">
            Нэвтрэх
          </div>

          <input
            value={inputValue}
            type="number"
            placeholder=""
            className="input input-bordered w-full"
            onChange={handleChange}
          />

          <div className="text-opacityColor mt-3 cursor-pointer text-[12px] mb-2">
            Нууц үг
          </div>

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            className="input input-bordered w-full"
          />

          <div className="flex items-center gap-1 justify-end mt-2">
            <span className="text-darkGray text-[13px] ">
              Нууц үгээ мартсан бол
            </span>
            <button className="text-darkGray text-[13px] font-bold">
              Энд дарна уу
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
              onClick={handleLogin}
              className="btn my-5 bg-mainColor text-white flex-1"
            >
              Нэвтрэх
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

export default LoginSecond;
