import React from "react";
import PrimBox from "./PrimBox";

let arr = [0,1,2,3,4,5,6,7,8];
const Arena = () => {
  return (
    <div className="flex flex-row w-full h-auto justify-center items-center">
      <div></div>
      <div className=" w-270 h-270 bg-teal-700 grid grid-cols-3 gap-3 drop-shadow-sm">
        {arr.map((i) => (
          <PrimBox key = {`${i}`}ke = {i}/>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Arena;
