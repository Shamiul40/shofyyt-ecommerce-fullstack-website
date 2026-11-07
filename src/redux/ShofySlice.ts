// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart: [],
//   favorite: [],
//   userInfo: null,
// };

// export const shofySlice = createSlice({
//   name: "shofy",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.cart = action.payload;
//     },
//   },
// });

// export const { addToCart } = shofySlice.actions;
// export default shofySlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface CartItem extends ProductType {
  quantity: number;
}

interface ShofyState {
  cart: CartItem[];
  favorite: ProductType[];
  userInfo: unknown;
}

const initialState: ShofyState = {
  cart: [],
  favorite: [],
  userInfo: null,
};

export const shofySlice = createSlice({
  name: "shofy",
  initialState,

  reducers: {
    // Add to Cart
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const product = state.cart.find((item) => item.id === id);

      if (product) {
        if (quantity <= 0) {
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          product.quantity = quantity;
        }
      }
    },

    // Increase Quantity
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.cart.find((item) => item.id === action.payload);

      if (product) {
        product.quantity += 1;
      }
    },

    // Decrease Quantity
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.cart.find((item) => item.id === action.payload);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },

    // Remove Product
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    // Clear Cart
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = shofySlice.actions;

export default shofySlice.reducer;
