import React from "react";
// import { cross } from "../assets/images";
// import { circle } from "../assets/images";

function Scard({ img, color, color2, chance }) {
  return (
    <button
      style={{ background: color }}
      className="w-28 h-42 flex flex-col rounded-xl justify-center items-center shadow-4xl"
    >
      <div className="w-18 h-auto pt-3 pb-3 justify-items-center">
        <img
          style={
            chance
              ? {}
              : { transform: "scale(-1,1)", transition: "all 2s ease-in-out" }
          }
          className="w-[60px] h-13"
          src={img}
          alt=""
        />
      </div>
      <div
        style={{ background: color2 }}
        className="w-full min-h-[4px] h-auto  "
      >
        {/* {chance ? (
          <p
            style={{ color: color }}
            className=" text-xs font-thin font-mono"
          ></p>
        ) : (
          <p style={{ color: color }} className=" text-xs font-thin font-mono">
            your chance
          </p>
        )} */}
      </div>
      <div
        style={{ color: color2 }}
        className="w-18 h-15 items-center justify-center"
      >
        <p style={{ color: color2 }} className="w-5 text-3xl  font-bold">
          0
        </p>
      </div>
    </button>
  );
}

export default Scard;
