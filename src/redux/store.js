import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./slices/profileSlice";
import cartReducer from './slices/cartSlice';
import newCartReducer from './slices/newCartSlice';
import modalReducer from "./slices/modalSlice";
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
  newCart: newCartReducer,
    modal: modalReducer,
  },
});

export default store