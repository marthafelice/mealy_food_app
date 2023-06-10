import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./slices/profileSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
  profile:profileReducer,
  auth:authReducer
  
  },
});

export default store