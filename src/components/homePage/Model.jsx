import React from "react";

const Model = ({ data }) => {
  return (
    <div className="flex justify-center">

<div className="grid grid-cols-4">
      {data.map((product, index) => (
        <img
          key={product.id}
          src="https://madeinmongolia.asia/uploads/home_section_banner//6HAdshevNjIUeszOoH8NOTMca39kU9dDTa9je0XH.png"
          alt=""
          width={240}
          height={240}
        />
      ))}
    </div>




    </div>
  
  );
};

export default Model;
