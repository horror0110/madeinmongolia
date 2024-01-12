import React from "react";
import Logo from "../navbar/Logo";

const LoginFooter = () => {
  return (
    <div className="fixed bottom-0 left-0  w-full flex flex-col justify-center items-center">
      <Logo />
      <p className=" text-[13px] text-darkGray my-2">
        All rights reserved. Copyright © 2024 MIM TRADING LLC.
      </p>
    </div>
  );
};

export default LoginFooter;
