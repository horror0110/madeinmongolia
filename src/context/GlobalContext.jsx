import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const [getModalData, setGetModalData] = useState("");

  const [userInfo, setUserInfo] = useState(localStorage.getItem("user"));

  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addCart = (product, value) => {
    const isProductInCart = basket.some((item) => item.id === product.id);

    let updatedCart;

    if (isProductInCart) {
      updatedCart = basket.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + value }
          : item
      );
    } else {
      const newCartItem = {
        id: product.id,
        name: product.name,
        price: product.main_price,
        quantity: value,
      };

      updatedCart = [...basket, newCartItem];
    }

    setBasket(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getModal = (id) => {
    setGetModalData(id);
    setOpenModal(true);
  };

  return (
    <GlobalContext.Provider
      value={{
        openModal,
        getModal,
        getModalData,
        setOpenModal,
        userInfo,
        setUserInfo,
        setBasket,
        basket,
        addCart,
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};
