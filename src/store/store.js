import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
  // can list all states/slices here, oths can be like locationState
  reducer: {
    cartState: cartReducer,
  }
});