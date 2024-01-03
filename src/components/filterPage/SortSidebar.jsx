import React from "react";
import { Link } from "react-router-dom";

const SortSidebar = ({ menu }) => {
  return (
    <div className="border w-[300px] rounded-md font-light">
      <h1 className="border-b pb-2 text-center">Ангиллууд</h1>
      <div className="flex flex-col gap-2 text-[14px]  p-3">
        {menu.map((item, index) => (
          <Link key={item.id} href="/">{item.title}</Link>
        ))}
      </div>
    </div>
  );
};

export default SortSidebar;
