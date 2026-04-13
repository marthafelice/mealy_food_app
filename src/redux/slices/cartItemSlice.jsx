import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API endpoints
const addItemToCartAPI = 'https://web.postman.co/workspace/My-Workspace~7806584b-dc4e-4c6c-814e-fc0d2b796614/request/26763835-a38f0028-3698-4b01-ad74-8524e0439f4b';
const viewCartAPI = 'https://mealyapp-bdev.onrender.com/api/v1/cart/view';
const increaseCartAPI = 'https://mealyapp-bdev.onrender.com/api/v1/cart/increase/';
const decreaseCartAPI = 'https://mealyapp-bdev.onrender.com/api/v1/cart/decrease/';
const clearCartAPI = 'https://mealyapp-bdev.onrender.com/api/v1/cart/clear/';

// Create async thunks for API calls
export const addItemToCart = createAsyncThunk('cart/addItemToCart', async (itemId) => {
  const response = await axios.post(`${addItemToCartAPI}/${itemId}`);
  return response.data;
});

export const viewCart = createAsyncThunk('cart/viewCart', async () => {
  const response = await axios.get(viewCartAPI);
  return response.data;
});

export const increaseCart = createAsyncThunk('cart/increaseCart', async (itemId) => {
  const response = await axios.post(`${increaseCartAPI}/${itemId}`);
  return response.data;
});

export const decreaseCart = createAsyncThunk('cart/decreaseCart', async (itemId) => {
  const response = await axios.post(`${decreaseCartAPI}/${itemId}`);
  return response.data;
});

export const clearCart = createAsyncThunk('cart/clearCart', async (cartId) => {
  const response = await axios.post(`${clearCartAPI}/${cartId}`);
  return response.data;
});

const cartItemSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    // Existing reducer code...
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItemToCart.fulfilled, (state, action) => {
       
      })
      .addCase(viewCart.fulfilled, (state, action) => {
        
      })
      .addCase(increaseCart.fulfilled, (state, action) => {
        
      })
      .addCase(decreaseCart.fulfilled, (state, action) => {
        
      })
      .addCase(clearCart.fulfilled, (state, action) => {
       
      });
  },
});

export default cartItemSlice.reducer;
