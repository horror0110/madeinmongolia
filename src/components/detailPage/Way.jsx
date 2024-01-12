import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const Way = ({ links }) => {
  return (
    <div className="text-linkColor text-[13px]  flex items-center gap-1 my-5">
      <Link to="" className="hover:underline">Нүүр</Link>
      <FaChevronRight />
      <Link to="" className="hover:underline">Бүх ангиллууд</Link>
      <FaChevronRight />
      {links && (
        <Link to="" className="hover:underline">
          {links.categories.category.name}
        </Link>
      )}

      <FaChevronRight />
      {links && (
        <Link to="" className="hover:underline">
          {links.categories.subcategory.name}
        </Link>
      )}

      <FaChevronRight />

      {links && (
        <Link className="font-bold text-black hover:underline">
          {links.categories.subsubcategory.name}
        </Link>
      )}
    </div>
  );
};

export default Way;
