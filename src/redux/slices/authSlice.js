import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displaySignUpModal: false,
  displayActivationModal: false,
  displayLoginModal: false,
  displayDeliveryMap: false,
};

export const authSlice = createSlice({
  name: "authentication pages",
  initialState,
  reducers: {
    toggledSignUp: (state) => {
      state.displaySignUpModal = !state.displaySignUpModal;
    },
    displayedAuthModal: (state, action) => {
      if (action.payload == "activation") {
        state.displayActivationModal = true;
        state.displaySignUpModal = false;
      }
      if (action.payload == "login") {
        state.displayActivationModal = false;
        state.displayLoginModal = true;
      }
      if (action.payload == "map") {
        state.displayDeliveryMap = true;
        state.displayLoginModal = false;
      }
    },
    closedAuthModal: (state, action) => {
      if (action.payload == "activation") {
        state.displayActivationModal = false;
      }
      if (action.payload == "login") {
        state.displayLoginModal = false;
        state.displayActivationModal = false;
      }
      if (action.payload == "map") {
        state.displayDeliveryMap = false;
      }
    },
  },
});

export const { toggledSignUp, displayedAuthModal, closedAuthModal } =
  authSlice.actions;
export default authSlice.reducer;
