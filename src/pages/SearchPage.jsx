import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Way from "../components/detailPage/Way";
import links from "../utils/link.json";
import SortPageBanner from "../components/filterPage/SortPageBanner";
import SortLogo from "../components/filterPage/SortLogo";
import sortData from "../utils/sortLogo.json";
import SortSidebar from "../components/filterPage/SortSidebar";
import menu from "../utils/menu.json";
import { IoSearchSharp } from "react-icons/io5";
import Select from "../components/filterPage/Select";
import sortCategoryData from "../utils/categoryOption.json";
import data from "../utils/product.json";
import NewProductTemp from "../components/homePage/NewProductTemp";
import ModalWindow from "../components/modal/ModalWindow"

const SearchPage = () => {
  return (
    <div>
      <Navbar />
      <ModalWindow/>
      {/* <Way links={links} /> */}
      <SortPageBanner />

      <div className="flex items-start gap-5 mx-20 mt-5">
        <div className="w-[30%]">
          <SortSidebar menu={menu} />
        </div>

        <div className="flex w-[70%] flex-col items-start">
          <SortLogo data={sortData} />

          {/** search input and filter */}
          <div className="mt-5 flex gap-10 w-full">
            <div className="">
              <div className="text-[13px] text-gray-500 font-light">Хайх</div>

              <div className=" flex items-center border px-2 py-1 rounded-md border-gray-400">
                <input
                  type="text"
                  placeholder="Бараа хайх"
                  className=" placeholder:text-[14px] focus:outline-none w-[220px] "
                />
                <IoSearchSharp />
              </div>
            </div>

            <div className="flex gap-2 ">
              <Select options={sortCategoryData} header="Ангилах" />
              <Select options={sortCategoryData} header="Брендүүд" />
              <Select options={sortCategoryData} header="Үйлдвэрлэгчид" />
            </div>
          </div>

          {/** search input and filter */}
          {/*** data ***/}
          <div className="mt-10 w-full">
            <h1 className="font-[500] text-xl mb-7 relative">
              Бүтээгдэхүүн
              <span className="absolute border-[0.5px] bottom-[-5px] left-0 w-full bg-gray-400"></span>
              <span className="absolute bottom-[-5px] left-0 border-[1px] border-black w-[120px]"></span>
            </h1>

            <div className="grid grid-cols-3 gap-5">
              {data.map((product, index) => (
                <div key={product.id}>
                  <NewProductTemp product={product} />
                </div>
              ))}
            </div>
          </div>
          {/*** data ***/}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;
