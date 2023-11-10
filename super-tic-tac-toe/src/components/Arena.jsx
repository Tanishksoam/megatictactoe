import React from "react";
import PrimBox from "./PrimBox";
import Scard from "./SCard";
import { circle, cross, reload } from "../assets/images";


let arr = [0,1,2,3,4,5,6,7,8];
const Arena = () => {
  return (
    <div className="flex flex-row w-full h-auto justify-center items-center">
      {/* Reset Button */}

      <div className="w-1/5 h-auto flex flex-col justify-center items-start">
        <Scard img={reload} />
      </div>

      {/* playing grid */}

      <div className=" w-270 h-270 bg-teal-700 grid grid-cols-3 gap-3 drop-shadow-sm">
        {arr.map((i) => (
          <PrimBox key = {`${i}`}ke = {i}/>
        ))}
      </div>

      {/* Score Board */}
      <div className="w-1/5 h-auto flex flex-col gap-20 justify-center items-end">
        <Scard img={cross} />
        <Scard img={circle} />
      </div>
    </div>
  );
};

export default Arena;
