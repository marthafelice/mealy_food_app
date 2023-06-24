import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./slices/profileSlice";
import cartReducer from './slices/cartSlice';
import authReducer from "./slices/authSlice";
import orderReducer from "./slices/orderSlice";
import userDataReducer from "./slices/userData"



const store = configureStore({
  reducer: {
  profile:profileReducer,
  cart: cartReducer,
  auth:authReducer,
  order:orderReducer,
  userData:userDataReducer,
  },
});

export default store