import React, { useContext, useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { GlobalContext } from "../../context/GlobalContext";
import { IoClose } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import thousandify from "thousandify";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

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

export default function BasketSidebar() {
  const { openCycle, cycleOpen, basket, setBasket } = useContext(GlobalContext);

  const increaseCount = (product) => {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.map((el) =>
        el.name === product.name ? { ...el, quantity: el.quantity + 1 } : el
      );
      localStorage.setItem("cart", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
  };

  const decreaseCount = (product) => {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.map((el) =>
        el.name === product.name && el.quantity > 1
          ? { ...el, quantity: el.quantity - 1 }
          : el
      );
      localStorage.setItem("cart", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
  };

  const handleChange = (e, product) => {
    const inputValue = e.target.value.trim();
    const newQuantity = inputValue !== "" ? parseInt(inputValue, 10) : null;

    if (isNaN(newQuantity) && inputValue !== "") {
      return;
    }

    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.map((el) =>
        el.name === product.name ? { ...el, quantity: newQuantity } : el
      );
      localStorage.setItem("cart", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
  };

  const deleteItem = (product) => {
    const updatedProducts = basket.filter((el) => product.id !== el.id);

    setBasket(updatedProducts);

    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };
  const handleEmpty = () => {
    setBasket("");

    localStorage.removeItem("cart");
  };

  const totalPrice =
    basket.length > 0 &&
    basket.reduce((total, item) => {
      return total + item.calculable_price * item.quantity;
    }, 0);

  return (
    <main className="fixed z-50 ">
      <AnimatePresence>
        {openCycle && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 450,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.4, duration: 0.3 },
            }}
            className="p-5 overflow-y-scroll max-h-screen"
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
                <div className="flex justify-between  items-center gap-3 text-sideBlack">
                  <div className="flex items-center gap-3">
                    <div
                      onClick={cycleOpen}
                      className="bg-mainColor w-max text-white p-2 rounded-md"
                    >
                      <IoClose />
                    </div>

                    <CiShoppingBasket size={20} />

                    <h1>Таны сагс</h1>
                  </div>

                  <button
                    onClick={handleEmpty}
                    className="flex items-center gap-2 bg-sideColor p-2 rounded-md text-[14px]"
                  >
                    <FaRegTrashAlt /> Хоослох
                  </button>
                </div>
                {basket.length !== 0 ? (
                  <div className="mt-10 flex flex-col gap-10">
                    {basket.map((product, index) => (
                      <div className="flex items-center justify-between pt-3 border-t-[2px]">
                        <div className="flex gap-5">
                          <div className="flex gap-5">
                            <img
                              src={`https://madeinmongolia.asia/${product.image}`}
                              width={70}
                              height={30}
                              className="rounded-md object-contain"
                            />
                            <div className="flex flex-col gap-3">
                              <h1 className="text-sideBlack2 font-bold text-[13px]">
                                {product.name}
                              </h1>

                              <span className="text-darkGray text-[13px]">
                                Ширхэгийн үнийн дүн {product.price}
                              </span>

                              {/*** increase decrease */}
                              <div className="flex items-center border w-max">
                                <button
                                  className="bg-mainColor text-white px-4 py-2 rounded"
                                  onClick={() => decreaseCount(product)}
                                >
                                  -
                                </button>
                                <input
                                  min={1}
                                  value={product.quantity}
                                  type="text"
                                  className="w-[40px] text-[12px] text-center"
                                  onChange={(e) => handleChange(e, product)}
                                />
                                <button
                                  className="bg-mainColor text-white px-4 py-2 rounded"
                                  onClick={() => increaseCount(product)}
                                >
                                  +
                                </button>
                              </div>
                              {/*** increase decrease */}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-5 justify-center">
                          <div
                            onClick={() => deleteItem(product)}
                            className="bg-sideColor p-3"
                          >
                            <FaRegTrashAlt size={12} />
                          </div>

                          <span className="text-darkGray text-[13px]">
                            {thousandify(
                              product.calculable_price * product.quantity
                            )}
                          </span>
                        </div>
                      </div>
                    ))}

                    <Link
                      to="/cart"
                      onClick={cycleOpen}
                      className="bg-mainColor w-full text-white flex justify-between rounded-md p-3"
                    >
                      <span>Худалдан авах</span>
                      <div className="flex items-center gap-2">
                        {thousandify(totalPrice)} <FaArrowRight />
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center my-10">
                    <h1 className="font-semibold">Таны сагс хоосон байна</h1>
                    <img
                      src="https://madeinmongolia.asia/assets/frontend/images/not_found.gif"
                      alt=""
                    />
                  </div>
                )}
              </motion.a>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </main>
  );
}
