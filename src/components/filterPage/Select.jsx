import React from "react";

const Select = ({ options, header }) => {
  return (
    <div className="">
      <h1 className="text-xs text-gray-500 mb-1">{header}</h1>
      <select className="select w-full min-h-0 text-gray-500 h-[35px] max-w-xs text-[13px] focus:outline-none bg-gray-200 rounded-sm py-0">
        {options.map((option, index) => (
          <option disabled={option[0]} className="text-black" key={option.id}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
