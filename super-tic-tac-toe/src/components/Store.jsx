import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
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
};

const keyReducer = (state = initialState, action) => {
  if (action.type === "x") {
    let newmatrix = JSON.parse(JSON.stringify(state.matrix));
    newmatrix[action.payload[0]][action.payload[1]] = "X";
    // console.log(state.matrix);
    return {
      
      count: state.count + 1,
      matrix: newmatrix,
    };
  } else if (action.type === "o") {
    
    let newmatrix = JSON.parse(JSON.stringify(state.matrix));
    newmatrix[action.payload[0]][action.payload[1]] = "O";
    return {
      
      count: state.count + 1,
      matrix: newmatrix,
    };
  } else {
    return state;
  }
};

const store = configureStore({ reducer: keyReducer });

export default store;
