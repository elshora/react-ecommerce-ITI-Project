import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cart/cartSlice";
import { itemsReducer } from "./reducers/itemsSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer,
  },
});
