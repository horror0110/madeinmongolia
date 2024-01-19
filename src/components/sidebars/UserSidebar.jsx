import React, { useContext, useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { GlobalContext } from "../../context/GlobalContext";
import { FaChevronRight } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { IoMdPaper } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BiConversation } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoMdHelpBuoy } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const sideVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function UserSidebar() {
  const links = [
    {
      id: 1,
      icon: <IoTimerOutline />,
      title: "Хянах самбар",
      url: "/",
    },
    {
      id: 2,
      icon: <IoMdPaper />,
      title: "Захиалгын түүх",
      url: "/",
    },
    {
      id: 3,
      icon: <CiHeart />,
      title: "Хадгалсан",
      url: "/",
    },
    {
      id: 4,
      icon: <BiConversation />,
      title: "Харилцан яриа",
      url: "/",
    },
    {
      id: 5,
      icon: <CiUser />,
      title: "Бүртгэлийн тохиргоо",
      url: "/",
    },
    {
      id: 6,
      icon: <BsCurrencyDollar />,
      title: "Миний хэтэвч",
      url: "/",
    },
    {
      id: 7,
      icon: <IoMdHelpBuoy size={25} />,
      title: "Тусламжийн хүсэлт",
      url: "/",
    },
  ];
  const { openCycle2, cycleOpen2, userInfo, handleLogout } =
    useContext(GlobalContext);

  const user = userInfo && userInfo.user;

  console.log(userInfo);

  return (
    userInfo && (
      <main className="fixed z-50">
        <AnimatePresence>
          -
          {openCycle2 && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: 450,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.4, duration: 0.3 },
              }}
              className="px-7 pt-20 text-darkGray overflow-y-scroll max-h-screen"
            >
              <motion.div
                className=""
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.995 }}
                  variants={itemVariants}
                >
                  <div>
                    <div
                      onClick={cycleOpen2}
                      className="absolute right-3 top-3 bg-mainColor p-2 text-white rounded-md"
                    >
                      <IoMdClose />
                    </div>

                    <div className="flex flex-col items-center">
                      <img
                        src="https://madeinmongolia.asia/assets/frontend/images/profile_placeholder.png"
                        alt=""
                        className="rounded-full"
                        width={80}
                        height={80}
                      />

                      <h1 className="mt-2 text-xl font-[500]">{user.name}</h1>

                      <span className="text-[13px]">{user.phone}</span>
                    </div>

                    <div className="cart rounded-lg text-white p-5 my-3">
                      <img
                        src="https://madeinmongolia.asia/uploads/footer_logo/aKRvDEYd359X5RKXdTqOBdNENyJv2VgF9Nt6gjDr.png"
                        alt=""
                        width={200}
                        height={200}
                      />

                      <div className="flex items-center justify-between border rounded-md p-1 mt-10">
                        <div className="flex flex-col">
                          <span>Үлдэгдэл</span>

                          <span>0₮</span>
                        </div>

                        <FaChevronRight />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {links.map((link, index) => (
                        <div className="border p-5 rounded-xl flex flex-col gap-5 items-center mx-auto text-center justify-center w-[130px] hover:shadow-lg">
                          <div>{link.icon}</div>

                          <span className="text-[12px] text-darkBlue">
                            {link.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="btn bg-mainColor rounded-md  text-white w-full"
                  >
                    Системээс гарах
                  </button>
                </motion.a>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </main>
    )
  );
}
