import React from "react";

import Navbar from "../components/shared/navbar/Navbar";
import Hero from "../components/local/homePage/Hero";
import NewProducts from "../components/local/homePage/NewProducts";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewProducts />
   
    </div>
  );
};

export default Home;
