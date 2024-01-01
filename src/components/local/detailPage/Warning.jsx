import React from 'react'

const Warning = () => {
  return (
    <div className="mt-8 text-[#856404] bg-pink-200 rounded-md p-3">
    <span className="flex items-center gap-2 mb-2">
      <img
        src="https://madeinmongolia.asia/assets/frontend/images/icons/info_icon.gif"
        alt=""
        width={30}
        height={30}
      />
      Санамж
    </span>
    <p className="text-[14px]">
      <span className="text-red-500">Хэрэглэгчдийн анхааралд:</span> Захиалга хүргэлтийн
      ачаалал их байгаа тул өдөр <span className="font-bold">12:00</span> <br/> цагаас өмнө хийсэн захиалга 
      <span className="font-bold"> 24</span> цагийн дотор хүргэгдэнэ, <span className="font-bold">12:00</span> цагаас хойш хийгдсэн
      захиалгууд 48 цагийн дотор хүргэгдэхийг анхаарна уу !
    </p>
  </div>
  )
}

export default Warning