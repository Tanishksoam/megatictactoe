import React from "react";
import SecBox from "./SecBox";

const PrimBox = () => {
  return (
    <div className="w-48 h-48 p-5 bg-teal-500">
      {
        <div className=" w-40 h-40 bg-teal-800 grid grid-cols-3 gap-1 ">
          {[...Array(9)].map(() => (
            <SecBox />
          ))}
        </div>
      }
    </div>
  );
};

export default PrimBox;
