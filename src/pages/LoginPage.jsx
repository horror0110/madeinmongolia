import React, { useState } from "react";
import LoginNav from "../components/loginPage/LoginNav";
import LoginFooter from "../components/loginPage/LoginFooter";
import { Link } from "react-router-dom";
import LoginForm from "../components/loginPage/LoginForm";
import RegisterForm from "../components/loginPage/RegisterForm";
import LoginSecond from "../components/loginPage/LoginSecond";

const LoginPage = () => {
  const [pageChoose, setPageChoose] = useState("login");

  const [inputValue , setInputValue] = useState("");
  return (
    <div className="">
      <LoginNav />

      {pageChoose == "login" && (
        <div>
          <LoginForm setPageChoose={setPageChoose} setInputValue={setInputValue} />
        </div>
      )}

      {pageChoose == "register" && (
        <div>
          <RegisterForm setPageChoose={setPageChoose} />
        </div>
      )}

      {pageChoose == "secondLogin" && <LoginSecond setPageChoose={setPageChoose} inputValue={inputValue} setInputValue={setInputValue}/>}

      <LoginFooter />
    </div>
  );
};

export default LoginPage;
