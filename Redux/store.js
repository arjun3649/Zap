import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./addressSlice.js";
import cartReducer from "./cartSlice.js";

export const store = configureStore({
  reducer: {
    address: addressReducer,
    cart: cartReducer,
  },
});
