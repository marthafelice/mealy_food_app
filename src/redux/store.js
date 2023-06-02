import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./slices/profileSlice";
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
  profile:profileReducer,
  cart: cartReducer
  },
});

export default store