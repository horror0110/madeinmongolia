import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { IoMdClose } from "react-icons/io";

const Modal = () => {
  const { getModalData, openModal } = useContext(GlobalContext);

  const [activeImg, setActiveImg] = useState(0);
  const [value, setValue] = useState(1);

  const increaseCount = () => {
    setValue(value + 1);
  };

  const decreaseCount = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-none w-max overflow-y-hidden">
          <div className="flex gap-10">
            {getModalData && (
              <div className="flex flex-col gap-2">
                {getModalData.image.map((el, index) => (
                  <img
                    onClick={() => setActiveImg(index)}
                    className={
                      activeImg == index ? `border-[2px] border-mainColor` : ``
                    }
                    key={index}
                    src={el}
                    alt=""
                    width={80}
                    height={80}
                  />
                ))}
              </div>
            )}

            {getModalData && (
              <img
                src={getModalData.image[activeImg]}
                alt=""
                width={450}
                height={450}
              />
            )}

            <div className="flex flex-col gap-5">
              <h1 className="text-mainGray font-semibold text-[22px]">
                {getModalData.title}
              </h1>

              <div className="flex gap-1 items-center">
                <div className="text-mainGray text-[13px] mr-5">Үнэ:</div>

                <div className="font-semibold text-mainColor text-[26px]">
                  {getModalData.price}
                </div>

                <div className="text-[13px] text-gray-500">/ширхэг</div>
              </div>

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
                    min="1"
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
                  ({getModalData.balance} ширхэг бэлэн байна)
                </div>
              </div>

              <div className="flex items-center gap-2 my-3">
                <div className="text-mainGray text-[13px]">Нийт үнэ:</div>

                <div className="font-semibold text-mainColor text-[26px]">
                  149000
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
                onClick={() => setActiveImg(0)}
                className=" fixed top-3 right-3"
              >
                <IoMdClose size={20} />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
