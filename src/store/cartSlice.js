import { createSlice } from '@reduxjs/toolkit'

// name it because it's relating to cart only.
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0
  },
  // functions which will be performed
  reducers: {
    // action param holds type and payload
    add(state, action) {
      const updatedCartList = state.cartList.concat(action.payload)
      const total = state.total + action.payload.price
      return { ...state, total, cartList: updatedCartList }
    },
    remove(state, action) {
      const updatedCartList = state.cartList.filter(cartItem => cartItem.id !== action.payload.id)
      const total = state.total - action.payload.price
      return { ...state, total, cartList: updatedCartList }
    }
  }
});

// to access the functions
// Now register this to store so it can be stored.
export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
