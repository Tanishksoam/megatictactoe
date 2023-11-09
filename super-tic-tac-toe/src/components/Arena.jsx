import React from "react";
import PrimBox from "./PrimBox";
const Arena = () => {
  return (
    <div className="flex flex-row w-full h-auto justify-center items-center">
      <div></div>
      <div className=" w-270 h-270 bg-teal-700 grid grid-cols-3 gap-3">
        {[...Array(9)].map(() => (
          <PrimBox />
        ))}
      </div>
      <div></div>
    </div>
    
  );
};

export default Arena;
