import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const [getModalData, setGetModalData] = useState("");

  const getModal = (data) => {
    setGetModalData(data);
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <GlobalContext.Provider value={{ openModal, getModal, getModalData }}>
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};
