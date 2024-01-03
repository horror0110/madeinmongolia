import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="https://madeinmongolia.asia/uploads/logo/AvqzdX9Ruc1spySrJnpZFJemEPD2dgo5YDNn6lDD.svg"
        alt="logo"
        width={210}
        height={210}
        className=""
      />
    </Link>
  );
};

export default Logo;
