import React from "react";

const Info = () => {
  return (
    <div className="mx-28">
      <div className="flex justify-between border-b pb-3">
        <h1 className="font-bold text-[18px]">Мэдээ мэдээлэл</h1>
        <button className="bg-mainColor text-white text-[13px] font-medium rounded-full px-2 py-1">
          Бүх мэдээ мэдээлэл
        </button>
      </div>

      <div className="flex justify-center mt-5">
        <div className="relative w-[600px] h-[300px]  ">
          <img
            src="https://madeinmongolia.asia/uploads/posts/348XeMu5OaU2z5HVBj3WBVOjcnl9SzO5EZdsomqS.jpg"
            alt=""
            className="brightness-50 hover:brightness-100 transition duration-300 object-cover w-full h-full rounded-l-md"
          />

          <h1 className="text-white absolute bottom-16 font-bold text-[15px] left-5">
            ДЭЛХИЙД ТЭМҮҮЛСЭН МОНГОЛ УХААН
          </h1>
        </div>

        <div className="relative w-[300px] h-[300px] ">
          <img
            src="https://madeinmongolia.asia/uploads/posts/5ogwV7GBIWWu2PK1ystbtzBfPsnEtKDGVOTGfdjc.jpg"
            alt=""
            className="brightness-50 hover:brightness-100 transition duration-300 object-cover w-full h-full "
          />
          <h1 className="absolute font-bold text-[15px] bottom-5 z-10 transform -translate-x-1/2  left-1/2 text-white text-center">
            АРЬС ШИР, НООС НООЛУУРАН БҮТЭЭГДЭХҮҮН-2023” АРГА ХЭМЖЭЭ 17 ДАХЬ
            ЖИЛДЭЭ БОЛЖ БАЙНА
          </h1>
        </div>

        <div className="relative w-[300px] h-[300px]">
          <img
            src="https://madeinmongolia.asia/uploads/posts/ij6L5cgmT7dCcHfgo2ShYQXD4wOpRc9JcMq5F11K.jpg"
            alt=""
            className="brightness-50 hover:brightness-100 transition duration-300 object-cover w-full h-full rounded-r-md"
          />
          <h1 className="absolute font-bold text-[15px] bottom-5 z-10 left-5 text-white">
            МОНГОЛ-ЧЕХИЙН БИЗНЕС ФОРУМ
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Info;
