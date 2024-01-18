import React from "react";

const WarningCart = () => {
  return (
    <div className="mt-8 w-full text-center text-darkGray border border-orange-500   bg-[#fff3cd] rounded-md px-20 py-5">
      <span className="flex text-[24px] font-[500]  justify-center items-center gap-2 mb-2">
        <img
          src="https://madeinmongolia.asia/assets/frontend/images/icons/info_icon.gif"
          alt=""
          width={30}
          height={30}
        />
        Санамж
      </span>
      <p className="text-[12px]">
        <span className="text-red-400 text-[12px] mr-1">
          Хэрэглэгчдийн анхааралд:
        </span>
        Захиалга хүргэлтийн ачаалал их байгаа тул өдөр 
        <span className="font-bold"> 12:00</span> цагаас өмнө хийсэн захиалга
        <span className="font-bold"> 24</span> цагийн дотор хүргэгдэнэ,
        <span className="font-bold">12:00</span> цагаас хойш хийгдсэн захиалгууд
        48 цагийн дотор хүргэгдэхийг анхаарна уу !
      </p>
    </div>
  );
};

export default WarningCart;
