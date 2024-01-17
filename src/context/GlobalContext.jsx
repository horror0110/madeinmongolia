import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const [getModalData, setGetModalData] = useState("");

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addCart = (product, value) => {

    // dawhtsah baraag shalgah
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
        image: product.thumbnail_image,
        calculable_price: product.calculable_price,
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


  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://madeinmongolia.asia/api/v2/auth/logout",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo?.access_token ?? ""}`,
          },
        }
      );

      const isCorrect = await res.json();

      if (isCorrect.result) {
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
        window.location.reload(true);
      }
    } catch (err) {
      console.log(err);
    }
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
        handleLogout
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};
