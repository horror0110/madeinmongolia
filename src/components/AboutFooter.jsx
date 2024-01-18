import React from "react";
import Logo from "./navbar/Logo";

const AboutFooter = () => {
  return (
    <div className="border-t w-full mt-10 p-10 flex flex-col gap-5 items-center justify-center text-darkGray text-[13px]">
      <Logo />
      <p>
        <span className="font-semibold">Хаяг:</span> Чингэлтэй дүүрэг, 5-р
        хороо, Нет Капитал оффис, 5-р давхар
      </p>
      <p>
        {" "}
        <span className="font-semibold">Утас:</span> 7723-4040
      </p>
      <p>
        <span className="font-semibold">И-мэйл:</span> operation@mimtrading.mn
      </p>
    </div>
  );
};

export default AboutFooter;
