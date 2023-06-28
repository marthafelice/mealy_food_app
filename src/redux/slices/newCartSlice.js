import { createSlice } from "@reduxjs/toolkit";

const newCartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartModalOpen: false,
    quantity: 0,
    selectedMenuItem: null,
    items: [],
  },
  reducers: {
    addToCart: (state) => {
      if (state.selectedMenuItem) {
        console.log(state.selectedMenuItem)
        console.log("sent")
        // const { id, title, description, price } = state.selectedMenuItem;
        // const newItem = { id, title, description, price, quantity: state.quantity };
        // state.cartItems.push(newItem);
      }
      state.quantity = 0;
      state.selectedMenuItem = null;
    },    
    setSelectedMenuItem(state, action) {
      state.selectedMenuItem = action.payload;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    displayedCartModal(state, action) {
      state.isCartModalOpen = action.payload === "openCartModal";
    },
    incrementQuantity(state) {
      state.quantity += 1;
    },
    decrementQuantity(state) {
      if (state.quantity > 0) {
        state.quantity -= 1;
      }
    },
    zeroQuantity(state) {
        state.quantity = 0;
    },
  },
});

export const {
  displayedCartModal,
  incrementQuantity,
  decrementQuantity,
  addToCart,
  removeFromCart,
  setSelectedMenuItem,
  clearCart,zeroQuantity,
} = newCartSlice.actions;
export default newCartSlice.reducer;
