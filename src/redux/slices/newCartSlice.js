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
    addToCart: (state, action) => {
      const { item } = action.payload;
      console.log(item)
      if(state.selectedMenuItem){
      const {id, type, img, price} = state.selectedMenuItem
      const newItem = {id, type, img, price, quantity:state.quantity}
      const existingItem = state.items.findIndex((i) => i.id === item.id);
      if (existingItem !== -1) {
        state.items[existingItem].quantity += state.quantity
   
      } else {
        state.items.push(newItem);
      }
    }
      console.log(state)
      
    },
    updateCartItemQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = quantity;
      }
    },
    setSelectedMenuItem(state, action) {
      state.selectedMenuItem = action.payload;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
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
  clearCart,
  zeroQuantity,updateCartItemQuantity,
} = newCartSlice.actions;
export default newCartSlice.reducer;
