import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { IoHelpBuoy } from "react-icons/io5";
import { MdPayment } from "react-icons/md";

const Service = () => {
  const data = [
    {
      id: 1,
      icon: <CiDeliveryTruck />,
      title: "Баталгаат хүргэлт",
      desc: "Бүх захиалгууд",
    },
    {
      id: 2,
      icon: <IoReload />,
      title: "Баталгаат хүргэлт",
      desc: "Бүх захиалгууд",
    },
    {
      id: 3,
      icon: <IoHelpBuoy />,
      title: "Баталгаат хүргэлт",
      desc: "Бүх захиалгууд",
    },
    {
      id: 4,
      icon: <MdPayment />,
      title: "Баталгаат хүргэлт",
      desc: "Бүх захиалгууд",
    },
  ];
  return (
    <div className="flex justify-around my-20 text-[#263459] border p-8  ">
      {data.map((el, index) => (
        <div
          key={el.id}
          className={
            index !== 3
              ? `flex flex-col items-center border-r pr-20 `
              : `flex flex-col items-center`
          }
        >
          <div className="text-[35px] mb-2">{el.icon}</div>
          <div className="font-semibold text-[13px] text-darkGray">
            {el.title}
          </div>
          <div className="text-gray-400 text-[13px]">{el.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Service;
