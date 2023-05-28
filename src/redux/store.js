import { configureStore } from "@reduxjs/toolkit";
//export default counterSlice.reducer from your slice will be imported here with any name of 
//your choice because u exported it as default
import counterReducer from "./slices/counterSlice";//your default export


const store = configureStore({
  reducer: {
  counter:counterReducer
  },
});

export default store