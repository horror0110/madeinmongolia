import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { IoMdClose } from "react-icons/io";
import { Modal } from "@mui/material";

const ModalWindow = () => {
  const { getModalData, openModal, setOpenModal } = useContext(GlobalContext);

  const [activeImg, setActiveImg] = useState(0);
  const [value, setValue] = useState(1);

  const [modalData, setModalData] = useState("");

  useEffect(() => {
    const fetchModalData = async () => {
      const res = await fetch(
        `https://madeinmongolia.asia/api/v2/products/${getModalData}`
      );

      const modalData = await res.json();

      console.log(modalData.data[0]);

      setModalData(modalData.data[0]);
    };

    if (getModalData) {
      fetchModalData();
    }
  }, [getModalData, setModalData]);

  const increaseCount = () => {
    setValue((prev) => parseInt(prev) + 1);
  };

  const decreaseCount = () => {
    if (value > 1) {
      setValue((prev) => parseInt(prev) - 1);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const calculateTotalPrice = () => {
    const total = modalData.calculable_price * value;

    return total
  };

  return (
    modalData && (
      <>
        <Modal
          onBackdropClick={() => {
            setActiveImg(0);
            setValue(1);
            setOpenModal(false);
          }}
          open={openModal}
          className=""
        >
          <div className="p-10 rounded-md bg-white fixed  left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[80%] overflow-y-scroll max-h-[80%]">
            <div className="flex gap-10">
              {modalData && (
                <div className="flex flex-col gap-2">
                  {modalData.photos.map((el, index) => (
                    <img
                      onClick={() => setActiveImg(index)}
                      className={
                        activeImg == index
                          ? `border-[2px] border-mainColor`
                          : ``
                      }
                      key={index}
                      src={`https://madeinmongolia.asia/${el}`}
                      alt=""
                      width={80}
                      height={80}
                    />
                  ))}
                </div>
              )}

              {modalData && (
                <img
                  src={`https://madeinmongolia.asia/${modalData.photos[activeImg]}`}
                  alt=""
                  width={450}
                  height={450}
                />
              )}

              <div className="flex flex-col gap-5">
                <h1 className="text-mainGray font-semibold text-[22px]">
                  {modalData.name}
                </h1>

                <div className="flex gap-1 items-center">
                  <div className="text-mainGray text-[13px] mr-5">Үнэ:</div>

                  <div className="font-semibold text-mainColor text-[26px]">
                    {modalData.main_price}
                  </div>

                  <div className="text-[13px] text-gray-500">/ширхэг</div>
                </div>

                {modalData.choice_options[0] && (
                  <div className="flex items-center gap-5 cursor-pointer">
                    <div className="mainGray text-[13px] ">Хэмжээ:</div>

                    <div className="font-[500] text-[14px] border rounded-sm px-3 py-1 border-mainColor w-max text-mainColor">
                      {modalData.choice_options[0].options[0]}
                    </div>
                  </div>
                )}

                <div className="flex items-center">
                  <h1 className="text-mainGray text-[13px]">Тоо ширхэг: </h1>

                  {/*** increase decrease */}
                  <div className="flex items-center mx-3 border">
                    <button
                      className="bg-mainColor text-white px-4 py-2 rounded"
                      onClick={decreaseCount}
                    >
                      -
                    </button>
                    <input
                      min={1}
                      value={value}
                      type="text"
                      className="w-[40px] text-xl text-center"
                      onChange={handleChange}
                    />
                    {/* <span className="mx-4 text-xl">{count}</span> */}
                    <button
                      className="bg-mainColor text-white px-4 py-2 rounded"
                      onClick={increaseCount}
                    >
                      +
                    </button>
                  </div>

                  {/*** increase decrease */}

                  <div className="text-mainGray text-[13px]">
                    ({modalData.current_stock} ширхэг бэлэн байна)
                  </div>
                </div>

                <div className="flex items-center gap-2 my-3">
                  <div className="text-mainGray text-[13px]">Нийт үнэ:</div>

                  <div className="font-semibold text-mainColor text-[26px]">
                    {calculateTotalPrice()}
                  </div>
                </div>

                <button className="bg-mainColor text-white w-max px-3 py-2 font-extralight rounded-md">
                  Сагсанд нэмэх
                </button>
              </div>
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button
                  onClick={() => {
                    setActiveImg(0);
                    setValue(1);
                    setOpenModal(false);
                  }}
                  className=" fixed top-3 right-3"
                >
                  <IoMdClose size={20} />
                </button>
              </form>
            </div>
          </div>
        </Modal>
      </>
    )
  );
};

export default ModalWindow;
