import React from "react";
// import { cross } from "../assets/images";
// import { circle } from "../assets/images";

function Scard({ img }) {
  return (
    <button className="w-28 h-42 bg-[#2D7F73] flex flex-col rounded-xl justify-center items-center shadow-4xl">
      <div className="w-18 h-auto pt-5 pb-5 justify-items-center">
        <img className="w-[60px] h-13" src={img} alt="" />
      </div>
      <div className="w-full h-1 bg-[#545454]"></div>
      <div className="w-18 h-15 items-center justify-center">
        <p className="w-5 text-3xl text-[#545454] font-bold">0</p>
      </div>
    </button>
  );
}

export default Scard;
