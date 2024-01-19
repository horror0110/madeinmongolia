import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Shadow = ({ setOpen }) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className={`fixed w-screen z-10 h-screen bg-black opacity-50 top-0 left-0 `}
    ></div>
  );
};

export default Shadow;
