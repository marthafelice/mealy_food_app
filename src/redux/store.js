import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./slices/profileSlice";
import cartReducer from './slices/cartSlice';
import authReducer from "./slices/authSlice";
import modalReducer from "./slices/modalSlice";

const store = configureStore({
  reducer: {
  profile:profileReducer,
  cart: cartReducer,
  auth:authReducer,
  modal:modalReducer
  },
});

export default store