import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const localStorageItems = localStorage.getItem("cart");
export const getCart = createAsyncThunk(
  "cart/getCart",
  async (_args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(`http://localhost:3005/cart`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
let initialState = {
  cartItems: localStorageItems ? JSON.parse(localStorageItems) : [],
  amount: 0,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.quantity = cartItem.quantity + 1;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.quantity = cartItem.quantity - 1;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    addTocart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      itemIndex >= 0
        ? (state.cartItems[itemIndex].quantity += 1)
        : state.cartItems.push({ ...action.payload, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    calulateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },

  extraReducers: {
    [getCart.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calulateTotals,
  addTocart,
} = cartSlice.actions;
