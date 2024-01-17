import React, { useContext, useEffect, useState } from "react";
import LoginNav from "../components/loginPage/LoginNav";
import LoginFooter from "../components/loginPage/LoginFooter";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/loginPage/LoginForm";
import RegisterForm from "../components/loginPage/RegisterForm";
import LoginSecond from "../components/loginPage/LoginSecond";
import { GlobalContext } from "../context/GlobalContext";
import RegisterOTP from "../components/loginPage/RegisterOTP";
import RegisterLast from "../components/loginPage/RegisterLast";

const LoginPage = () => {
  const [pageChoose, setPageChoose] = useState("login");
  const [inputValue, setInputValue] = useState("");

  const [phoneValue , setPhoneValue] = useState("")
  const { userInfo } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <div className="">
      <LoginNav />

      {pageChoose == "login" && (
        <div>
          <LoginForm
            setPageChoose={setPageChoose}
            setInputValue={setInputValue}
          />
        </div>
      )}

      {pageChoose == "register" && (
        <div>
          <RegisterForm setPhoneValue={setPhoneValue} setPageChoose={setPageChoose} />
        </div>
      )}

      {pageChoose == "secondLogin" && (
        <LoginSecond
          setPageChoose={setPageChoose}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}

      {pageChoose == "OTP" && <RegisterOTP setPageChoose={setPageChoose} phoneValue={phoneValue} />}

      {pageChoose == "LAST" && <RegisterLast setPageChoose={setPageChoose} phoneValue={phoneValue} />}

      <LoginFooter />
    </div>
  );
};

export default LoginPage;
