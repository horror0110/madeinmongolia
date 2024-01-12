import React from "react";

const Comments = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-3 ">
        <h1 className=" text-[16px] text-mainColor font-[300] mb-7 relative">
          СЭТГЭГДЭЛ
          <span className="absolute border-[0.5px] bottom-[-10px] left-0 w-full bg-gray-400"></span>
          <span className="absolute bottom-[-10px] left-0 border-[1px] border-black w-[120px]"></span>
        </h1>
        <img
          src="https://madeinmongolia.asia/assets/frontend/images/icons/emptyTrans.png"
          alt=""
          width={80}
          height={80}
        />
        <span className="text-darkGray ">Сэтгэгдэл байхгүй байна</span>
      </div>
    </div>
  );
};

export default Comments;
