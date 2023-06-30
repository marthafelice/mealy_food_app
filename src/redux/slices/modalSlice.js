import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    displayedModal: null,
  },
  reducers: {
    displayedChatModal: (state, action) => {
      state.displayedModal = action.payload;
    },
    hideModal: (state) => {
      state.displayedModal = null;
    },
  },
});

export const { displayedChatModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
