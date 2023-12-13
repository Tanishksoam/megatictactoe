import React from "react";
// import darkcross from "/src/assets/images.jsx";
// import circle from "/src/assets/images.jsx";
const Img = (img) => {
  return (
    <div>
      <img src={img} alt="X" className=" w-5 h-5 overflow-hidden" />
    </div>
  );
};
export default Img;
