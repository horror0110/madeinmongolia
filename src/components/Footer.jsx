import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-darkBlue w-full px-20 pt-16 pb-8 text-white">
      <div className="flex gap-10">
        <div className="w-[40%]">
          <img
            src="https://madeinmongolia.asia/uploads/footer_logo/aKRvDEYd359X5RKXdTqOBdNENyJv2VgF9Nt6gjDr.png"
            alt="footer"
            width={300}
            height={300}
          />
          <p className="my-4 text-[13px] font-normal">
            Үндэсний үйлдвэрлэгчдийн нэгдсэн мэдээллийн сан
          </p>

          <div className="flex items-center ">
            <input
              type="text"
              placeholder="Таны И-мэйл хаяг"
              className="rounded-md p-1 py-1 w-[50%] text-black placeholder:text-[14px] placeholder:text-gray-300 placeholder:px-2"
            />
            <button className="bg-darkBlue text-white font-[300] px-3 py-2 rounded-md">
              Дагах
            </button>
          </div>
        </div>

        <div className="w-[20%]">
          <h1 className="text-[13px] text-grayColor font-semibold mb-2">
            ХОЛБОО БАРИХ
          </h1>
          <span className="text-gray-400 text-[14px]">Хаяг:</span>
          <p className="text-[13px] font-normal">
            Улаанбаатар, Монгол Улс, 2 хороо, Чингэлтэй дүүрэг, Нет Капитал
            оффис 5-р давхар, Цагийн хуваарь 09:00 - 18:00 (ажлын өдөр) 12:00 -
            13:00 (цайны цаг)
          </p>
          <div className="flex flex-col mt-2">
            <span className="text-gray-400 text-[13px]">Утас:</span>

            <span className="text-[13px]">77234040</span>
          </div>
          <div className="flex flex-col mt-2">
            <span className="text-gray-400 text-[13px]">И-мэйл:</span>
            <p className="text-[13px]">operation@mimtrading.mn</p>
          </div>
        </div>

        <div className="w-[20%]">
          <h1 className="text-[12px] text-grayColor font-semibold mb-2">
            ХЭРЭГТЭЙ ХОЛБООС
          </h1>
          <div className="flex flex-col gap-2 text-[#818a91] text-[12.8px]">
            <Link to="">www.codehub.mn</Link>
            <Link to="">www.mimtrading.mn</Link>
            <Link to="">www.jd.com</Link>
          </div>
        </div>

        <div className="w-[20%]">
          <h1 className="text-[12px] text-grayColor font-semibold mb-2">
            МИНИЙ БҮРТГЭЛ
          </h1>

          <div className="flex flex-col gap-2 text-[12.8px] mb-4 text-[#818a91]">
            <Link to="">www.codehub.mn</Link>
            <Link to="">www.mimtrading.mn</Link>
            <Link to="">www.jd.com</Link>
            <Link to="">www.jd.com</Link>
          </div>

          <div className="text-[12px] font-semibold ">
            ҮЙЛДВЭРЛЭГЧЭЭР <br /> БҮРТГҮҮЛЭХ
          </div>
          <button className="bg-gray-600 p-2 rounded-md mt-2">
            Бүртгүүлэх
          </button>
        </div>
      </div>

      <div className="flex mt-20 items-center">
        <div className="text-[#818a91] text-[12px] w-[40%]">
          <div className="flex gap-3">
            <span>© 2024 Made in Mongolia</span>

            <button>Үйлчилгээний нөхцөл</button>
          </div>

          <button>Нууцлалын баталгаа</button>
        </div>

        <div className="flex gap-2 w-[20%]">
          <div className="bg-[#3b579d] p-2 rounded-sm">
            <FaFacebookF size={16} />
          </div>
          <div className="bg-pink-500 rounded-sm p-2">
            <FaInstagram size={16} />
          </div>
          <div className="bg-[#00aced] p-2 rounded-sm">
            <FaTwitter />
          </div>
        </div>
        <div className="ml-80">
          <img
            src="https://madeinmongolia.asia/assets/frontend/images/powered.png"
            alt=""
            width={100}
            height={100}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
