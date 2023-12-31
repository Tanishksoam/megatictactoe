import { configureStore } from "@reduxjs/toolkit";
import produce from "immer";
const initialState = {
  count: 0,
  countx: 0|window.localStorage.getItem("countx"),
  counto: 0|window.localStorage.getItem("counto"),
  matrix: [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ],
  allowed:-1,
  filled:[-999],
  winner:[-1,-1,-1,-1,-1,-1,-1,-1,-1]
};



const keyReducer = (state = initialState, action) => {
  return produce(state, (draftState) => {
    if (action.type === "x") {
      draftState.matrix[action.payload[0]][action.payload[1]] = "X";
      draftState.count += 1;
    } else if (action.type === "o") {
      draftState.matrix[action.payload[0]][action.payload[1]] = "O";
      draftState.count += 1;
    } else if (action.type === "allowed") {
      draftState.allowed = action.payload;
    } else if (action.type === "fill") {
      draftState.filled.push(action.payload);
    }
    else if(action.type === "winner"){
      draftState.winner[action.payload[1]] = action.payload[0];
    }
    else if(action.type === "addx"){
      draftState.countx +=1;
    }
    else if(action.type === "addo"){
      draftState.counto +=1;
    }
    else if(action.type === "clear"){
      draftState = initialState;
    }
  });
};

const store = configureStore({ reducer: keyReducer });

export default store;
