import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const Way = ({ links }) => {
  return (
    <div className="flex gap-1 mx-20 my-5">
      {links.map((link, index) => (
        <Link
          key={link.id}
          className="flex items-center font-light text-linkColor text-[13px] hover:text-gray-700 hover:underline"
          href=""
        >
          {link.title} <FaChevronRight size={10} />
        </Link>
      ))}
    </div>
  );
};

export default Way;
