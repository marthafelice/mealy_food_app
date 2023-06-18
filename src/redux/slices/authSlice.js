import { createSlice } from "@reduxjs/toolkit";
import * as auth from "../constants/auth";

const initialState = {
  authUser: false,
  displaySignUpModal: false,
  displayActivationModal: false,
  displayLoginModal: false,
  displayDeliveryMap: false,
  displayForgotPwd: false,
  displayCreateNewPwd: false,
  setAddress:false,
  toggleLoginTip:false
};

export const authSlice = createSlice({
  name: "authentication pages",
  initialState,
  reducers: {
    toggled: (state,action) => {
      if(action.payload==="signup"){
      state.displaySignUpModal = !state.displaySignUpModal;
      }
      if(action.payload==="loginTip"){
        state.toggleLoginTip=!state.toggleLoginTip
      }
    },
    authedHomepage: (state) => {
      state.authUser = true;
    },
    displayedAuthModal: (state, action) => {
      if (action.payload === auth.activation) {
        state.displayActivationModal = true;
      }
      if (action.payload === auth.login) {
        state.displayLoginModal = true;
      }
      if (action.payload === auth.map) {
        state.displayDeliveryMap = true;
      }
      if (action.payload === auth.forgotPwd) {
        state.displayForgotPwd = true;
      }
      if (action.payload === auth.CreateNewPwd) {
        state.displayCreateNewPwd = true;
      }
    },
    closedAuthModal: (state, action) => {
      if (action.payload === auth.activation) {
        state.displayActivationModal = false;
      }
      if (action.payload === auth.login) {
        state.displayLoginModal = false;
      }
      if (action.payload === auth.map) {
        state.displayDeliveryMap = false;
      }
      if (action.payload === auth.forgotPwd) {
        state.displayForgotPwd = false;
      }
      if (action.payload === auth.CreateNewPwd) {
        state.displayCreateNewPwd = false;
      }
    },
    go:(state,action)=>{
      if(action.payload==='goHome'){
        state.setAddress=true
      }
      if(action.payload==='goLand'){
        state.setAddress=false
      }
      
      
    },
  },
});

export const { toggled, displayedAuthModal,go, closedAuthModal ,authedHomepage} =
  authSlice.actions;
export default authSlice.reducer;
