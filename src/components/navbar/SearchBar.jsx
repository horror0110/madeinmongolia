import React from "react";

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center bg-gray-100 px-2">
      <input
        type="text"
        placeholder="Хайх үгээ оруулна уу..."
        className=" bg-gray-100 placeholder:text-gray-500 placeholder:text-[14px] p-2 focus:outline-none w-96"
      />
      <img
        src="https://madeinmongolia.asia/assets/frontend/images/icons/search_icon.gif"
        width={20}
        height={20}
      />
    </div>
  );
};

export default SearchBar;
