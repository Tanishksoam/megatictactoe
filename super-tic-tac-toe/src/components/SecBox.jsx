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

    const isMoveAllowed =
      store.getState().allowed === -1 || store.getState().allowed === index[0];
    if (!isMoveAllowed) {
      return;
    }
    const filled2 = store.getState().filled;
    if (filled2 && filled2.length > 0) {
      for (let i = 0; i < filled2.length; i++) {
        if (filled2[i] === index[0]) {
          return;
        }
      }
    }

    const d = document.getElementById(k.k);
    d.innerHTML =
      store.getState().count % 2 === 0
        ? "<img src='../assets/darkcross.png' class=' w-8 h-8 top-2 justify-center items-center absolute'>"
        : "<img src='../assets/circle.png' class=' w-8 h-8 top-2 justify-center items-center absolute'> ";
    if (store.getState().count % 2 === 0) {
      store.dispatch({ type: "x", payload: index });
    } else {
      store.dispatch({ type: "o", payload: index });
    }
    const winner = checkWinner(store.getState().matrix[index[0]]);
    if (winner === null) {
    } else if (winner == "Tie") {
      store.dispatch({ type: "fill", payload: index[0] });
      const tie = document.getElementById(index[0]);
      tie.innerHTML = "Tie";
      tie.style.fontSize = "130px";
      tie.style.textAlign = "center";
    } else {
      store.dispatch({ type: "winner", payload: [winner, index[0]] });
      store.dispatch({ type: "fill", payload: index[0] });
      const win = document.getElementById(index[0]);
      win.innerHTML =
        winner === "X"
          ? "<img src='../assets/darkcross.png' class=' w-24 h-24 top-10 justify-center items-center absolute'>"
          : "<img src='../assets/circle.png' class=' w-24 h-24 top-10 justify-center items-center absolute'> ";
      win.style.fontSize = "130px";
      win.style.textAlign = "center";
    }
    // console.log(store.getState().filled);

    const smallBoardWinner = checkWinner(store.getState().matrix[index[1]]);
    // console.log(smallBoardWinner);
    if (smallBoardWinner !== null) {
      store.dispatch({ type: "allowed", payload: -1 });
    } else {
      store.dispatch({ type: "allowed", payload: index[1] });
    }

    for (let i = 0; i < 9; i++) {
      const allowedBoard = document.getElementById(i);
      allowedBoard.style.border = "1px solid rgb(20 ,184 ,166)";
    }
    if (store.getState().allowed === -1) {
      for (let i = 0; i < 9; i++) {
        const allowedBoard = document.getElementById(i);
        allowedBoard.style.border = "solid 5px red";
        for (let j = 0; j < store.getState().filled.length; j++) {
          if (store.getState().filled[j] == i) {
            allowedBoard.style.border = "1px solid rgb(20 ,184 ,166)";
            break;
          }
        }
      }
    } else {
      const bigtictactoe = document.getElementById(k.k.split(",")[1]);
      const smalltictactoe = document.getElementById(k.k.split(",")[0]);
      smalltictactoe.style.border = "1px solid rgb(20 ,184 ,166)";
      bigtictactoe.style.border = "solid 5px red";
    }
    const overallWinner = checkWinner(store.getState().winner);
    // console.log(store.getState().winner);
    if (overallWinner !== null) {
      if (overallWinner === "Tie") {
        alert("Tie");
        return;
      } else if (overallWinner === "X") {
        store.getState().countx++;
      } else {
        store.getState().county++;
      }
      alert(`${overallWinner} has won the game}`);
      return;
    }

    setFilled(true);
  };
  return (
    <div
      id={k.k}
      className="w-13 h-13 bg-teal-500 flex justify-center align-center relative"
      onClick={() => {
        handleClick();
      }}
    ></div>
  );
}
