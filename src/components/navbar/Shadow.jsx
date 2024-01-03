import React from "react";

const Shadow = ({ open }) => {
  return (
    open && (
      <div className="fixed w-screen z-10 h-screen bg-black opacity-50 top-0 left-0">
        Shadow
      </div>
    )
  );
};

export default Shadow;
