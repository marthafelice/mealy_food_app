//NOTE:export your reducer as a default export and your actions as named exports
//exporting reducer as default export enable you to give it anyname in any component you need it
//provided your file path is correct

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
//increment and decrement are your action creators


export const{increment,decrement} =counterSlice.actions

export default counterSlice.reducer