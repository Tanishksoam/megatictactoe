import React, { useState } from "react";
import SecBox from "./SecBox";

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr);
const PrimBox = (ke) => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-48 h-48 p-5 bg-teal-500" id = {ke.ke}>
      {/* {console.log(ke)} */}
      <div
        className=" w-40 h-40 bg-teal-800 grid grid-cols-3 gap-1 "
        key={ke.ke}
      >
        {arr.map((i) => (
          // console.log(i),
          <SecBox key={`${ke.ke}_${i}`} k={`${ke.ke},${i}`} />
        ))}
      </div>
    </div>
  );
};

export default PrimBox;
