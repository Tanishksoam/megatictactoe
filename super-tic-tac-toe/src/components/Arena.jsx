import React, { useState } from "react";
import PrimBox from "./PrimBox";
import Scard from "./Scard";
import store from "./Store";
import { circle, cross, reload, darkcircle, darkcross } from "/src/assets/images";

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const Arena = () => {
  const [count, setCount] = useState(0);
  store.subscribe(() => {
    setCount(store.getState().count);
  });

  let grayColor = "#545454";
  return (
    <div className="flex flex-row w-full h-auto justify-center items-center">
      {/* Reset Button */}

      <div className="w-1/5 h-auto flex flex-col justify-center items-start">
        <button
          onClick={() => window.location.reload()}
          className="w-28 h-42 bg-[#2D7F73] flex flex-col rounded-xl justify-center items-center shadow-4xl"
        >
          <div className="w-18 h-auto pt-5 pb-5 justify-items-center">
            <img className="w-[60px] h-13" src={reload} alt="" />
          </div>
        </button>
      </div>

      {/* playing grid */}

      <div className=" w-270 h-270 bg-teal-700 grid grid-cols-3 gap-3 drop-shadow-sm">
        {arr.map((i) => (
          <PrimBox key={`${i}`} ke={i} />
        ))}
      </div>

      {/* Score Board */}
      <div className="w-1/5 h-auto flex flex-col gap-20 justify-center items-end">
        {count % 2 === 0 ? (
          <Scard
            img={darkcross}
            color2={grayColor}
            color="#F1EBD6"
            chance={false}
          />
        ) : (
          <Scard img={cross} color={grayColor} color2="#F1EBD6" chance={true} />
        )}
        {count % 2 === 1 ? (
          <Scard
            img={darkcircle}
            color="#F1EBD6"
            color2="#545454"
            chance={false}
          />
        ) : (
          <Scard img={circle} color="#545454" color2="#F1EBD6" chance={true} />
        )}
      </div>
    </div>
  );
};

export default Arena;
