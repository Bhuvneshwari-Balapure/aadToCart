import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
const initialState = {
  cart2: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart2.find(
        (product) => product.id === action.payload._id
      );
      if (existingProduct) {
        alert("Product already added to cart");
      } else {
        state.cart2.push(action.payload);
      }
    },
    removeFromCart: (state, actions) => {
      state.cart2 = state.cart2.filter((product) => {
        return product.id != actions.payload;
      });
    },
    IncreaseQuantity: (state, actions) => {
      const product = state.cart2.map(
        (product) => product.id === actions.payload.id
      );
      if (product) {
        product.quantity++;
      }
    },
    DecreaseQuantity: (state, actions) => {
      state.cart2.map((product) => {
        if (product.id == actions.payload) {
          if (product.quantity > 1) {
            product.quantity--;
          } else {
            message.error("Quantity Should Not be Less Then One");
          }
        }
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  IncreaseQuantity,
  DecreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
