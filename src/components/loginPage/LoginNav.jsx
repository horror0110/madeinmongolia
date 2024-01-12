import React from "react";
import Logo from "../navbar/Logo";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginNav = () => {
  return (
    <Link to={"/"} className="w-full relative top-0 left-0 flex items-center gap-5 px-[16px] py-[14px]  border-b z-20">
      <FaAngleLeft size={30} />
      <Logo />
    </Link>
  );
};

export default LoginNav;
