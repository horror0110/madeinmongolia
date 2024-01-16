import React from "react";

const BreadCrumbComponent = ({ list = [] }) => {
  return (
    <nav
      className="flex mb-6  text-linkColor text-[13px]"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center gap-2">
          <a
            href="/"
            className=" hover:text-blue-600 inline-flex items-center "
          >
            Нүүр
          </a>

          <svg
            className="w-3 h-3 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>

          <a
            href="/products"
            className="hover:text-blue-600 inline-flex items-center  "
          >
            Бүх ангиллууд
          </a>
        </li>
        {list.map((el, index) => {
          return (
            <li key={`bread-crumb-#${index}`}>
              <div className="flex items-center">
                <svg
                  className="w-3 h-3  mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href={el.isCurrent ? "#" : el.dir}
                  className={`${
                    el.isCurrent ? "font-bold" : ""
                  } hover:text-blue-600 ${
                    el.last ? "font-bold text-black" : ""
                  }`}
                >
                  {el.label}
                </a>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbComponent;
