import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import AboutFooter from "../components/AboutFooter";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-[950px] mx-auto ">
        <h1 className="text-center text-lg my-10">БИДНИЙ ТУХАЙ</h1>

        <div className="flex items-center">
          <img
            src="https://madeinmongolia.asia/uploads/about/ckeditor/images//PVZy7jnaI39tiJkAjY5ddqyjHRpSCuj9OyBM2ERL.webp"
            alt=""
            width={450}
            height={450}
          />
          <p className="footerColor text-[13px]">
            Манай компани нь 2018 оноос нийгмийн хариуцлагын хүрээнд “Made in
            Mongolia” төсөл болон Digital Silk Road 2.0 гэсэн зорилт тавин
            үндэсний үйлдвэрлэлийг хөгжүүлэх, экспортын шинэ гарц гаргалгааг бий
            болгох зорилгоор www.madeinmongolia.asia үндэсний үйлдвэрлэгчдийн
            нэгдсэн мэдээллийн сан бүхий ашгийн бус цахим худалдааны системийг
            хөгжүүлэн дэлхийд тэргүүлэгч технологийн компаниудын шийдлүүдийг
            хослуулан ашиглаж томоохон платформуудтай интеграци хийн хөгжүүлэн,
            өнөөдрийг хүртэл амжилттай хэрэгжүүлсээр ирсэн билээ.
          </p>
        </div>

        <div>
          <img
            src="https://madeinmongolia.asia/uploads/about/ckeditor/images//qyb05leGRMTgtbtmsH9ZfwXfFcIeNhqAyBS1OQqb.jpg"
            alt=""
            width={850}
            height={850}
          />

          <p className="text-[13px] text-darkGray">
            Уг төслийн хүрээнд үйлдвэрлэгчдийн бараа бүтээгдэхүүнийг цахим
            худалдааны системээр дамжуулан хамгийн бага буюу 3%-ийн /банкны
            төлбөр тооцооны төлбөр/ шимтгэлтэйгээр борлуулан, Улаанбаатар хот
            дотор үнэгүй хүргэх үйлчилгээ үзүүлэн олон зуун байгууллагын үйл
            ажиллагааг дэмжиж Монгол Улсын өнцөг булан бүрд байгаа
            үйлдвэрлэгчдийн бүтээгдэхүүн үйлчилгээг сурталчлан худалдан авагчдад
            хүргэх томоохон гүүр болон ажиллаж байна. Made in Mongolia 2.0
            хувилбар нь цахим худалдааны орчин үеийн шийдлүүдийг нэгтгэсэн цогц
            систем бөгөөд уг систем нь нэг доор 1,000,000 хэрэглэгчийн хандалтыг
            даах STRESS TEST буюу системийн хүчин чадал болох үндсэн эх кодын
            ачаалал даах чадвар, серьверийн ачаалал даах чадвар, нууцлалын
            аюулгүй байдлын тест гэх мэт хэд хэдэн шалгууруудыг бүрэн давсан
            систем юм.
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-20 items-center justify-center my-10">
              <div className="flex flex-col items-center ">
                <span className="text-oceanBlue text-[36px] font-semibold">
                  137,000
                </span>
                <span className="text-darkGray text-[13px] ">
                  Бүртгэлтэй хэрэглэгч
                </span>
              </div>
              <div className="flex flex-col items-center ">
                <span className="text-oceanBlue text-[36px] font-semibold">
                  4,000+
                </span>
                <span className="text-darkGray text-[13px] ">
                  Сарын дундаж борлуулалт
                </span>
              </div>
              <div className="flex flex-col items-center  ">
                <span className="text-oceanBlue text-[36px] font-semibold">
                  56,000+
                </span>
                <span className="text-darkGray text-[13px] ">
                  Идэвхитэй хэрэглэгч
                </span>
              </div>
            </div>

            <div className="flex gap-20 items-center justify-center">
              <div className="flex flex-col items-center ">
                <span className="text-oceanBlue text-[36px] font-semibold">
                  100,000,000
                </span>
                <span className="text-darkGray text-[13px] ">
                  Сард хийгддэг захиалгын дүн
                </span>
              </div>
              <div className="flex flex-col items-center ">
                <span className="text-oceanBlue text-[36px] font-semibold">
                  100+
                </span>
                <span className="text-darkGray text-[13px] ">
                  Бүртгэлтэй үйлдвэрлэгч
                </span>
              </div>
              <div className="flex flex-col items-center ">
                <span className="text-oceanBlue text-[36px] font-semibold">
                  34,000+
                </span>
                <span className="text-darkGray text-[13px] ">
                  Сарын дундаж хандалт
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center justify-center mt-10">
              <h1 className="text-darkGray text-lg font-semibold mt-10">
                БИДНИЙ ЭРХЭМ ЗОРИЛГО
              </h1>
              <p className="text-darkGray text-[13px]">
                Бид мэдээллийн технологийн шийдлийг өөрсдийн БҮТЭЭГДЭХҮҮН,
                ҮЙЛЧИЛГЭЭГЭЭРЭЭ дамжуулан хүн бүрт хүртээмжтэй, харилцагч
                байгууллагуудтайгаа урт хугацаанд хамтран ажиллаж мэдээллийн
                технологийн шинэлэг шийдэл, сайжруулалтыг байнга нэвтрүүлэн
                зорьж ажиллахыг баримтална.
              </p>

              <p className="text-darkGray font-semibold text-[14px] mt-10">
                Хамтын хүчээр Монгол брэндийг дэлхийд таниулъя.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutFooter />
      <Footer />
    </div>
  );
};

export default AboutPage;
