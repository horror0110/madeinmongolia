import React from 'react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/Footer"
import Status from "../components/cartPage/Status";
import WarningCart from "../components/cartPage/WarningCart"
import CheckoutSidebar from "../components/cartPage/CheckoutSidebar";

const DeliveryPage = () => {
  return (
    <div>
        <Navbar/>
        <Status/>
        <WarningCart/>
        <div className='flex justify-center gap-10 mt-10 mx-20'>

            <div className='w-[65%]'>
                 <h1>Made in Mongolia-н бүтээгдэхүүн</h1>

                 
            </div>
            <div className='w-[35%]'>

            <CheckoutSidebar/>

            </div>
        
        </div>
        <Footer/>
    </div>
  )
}

export default DeliveryPage