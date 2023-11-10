import React, { useState } from "react";
import store from "./Store";
import checkWinner from "./Logic";
export default function SecBox(k) {
  const [filled, setFilled] = useState(false);
  const index = [parseInt(k.k.split(",")[0]), parseInt(k.k.split(",")[1])];
  const handleClick = () => {
    if (filled) {
      return;
    }
    const d = document.getElementById(k.k);
    d.innerHTML = store.getState().count % 2 === 0 ? "X" : "O";
    // console.log(store.getState().count);
    if (store.getState().count % 2 === 0) {
      console.log("X");
      store.dispatch({ type: "x", payload: index });
    } else {
      console.log("O");
      store.dispatch({ type: "o", payload: index });
    }
    const winner = checkWinner(store.getState().matrix[index[0]])
    if(winner == null){

    }
    else if(winner == "Tie"){
      alert("Tie");
    }
    else{
      alert(winner+" won");
    }
    const bigtictactoe = document.getElementById(k.k.split(",")[1]);
    const smalltictactoe = document.getElementById(k.k.split(",")[0]);
    smalltictactoe.style.backgroundColor = "rgb(20 ,184 ,166)";
    bigtictactoe.style.backgroundColor = "red";
    
    setFilled(true);

  };
  return (
    <div
      id={k.k}
      className="w-13 h-13 bg-teal-500"
      onClick={() => {
        handleClick();
      }}
    ></div>
  );
}
