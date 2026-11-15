
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ProductType } from "../../type";

// interface CartItem extends ProductType {
//   quantity: number;
// }

// interface ShofyState {
//   cart: CartItem[];
//   favorite: ProductType[];
//   userInfo: unknown;
//   activeProductTitle: string | null;
// }

// interface UpdateQuantityPayload {
//   id: number;
//   quantity: number;
// }

// const initialState: ShofyState = {
//   cart: [],
//   favorite: [],
//   userInfo: null,
//   activeProductTitle: null,
// };

// export const shofySlice = createSlice({
//   name: "shofy",
//   initialState,

//   reducers: {
//     // Add to Cart
//     addToCart: (state, action: PayloadAction<ProductType>) => {
//       state.activeProductTitle = action.payload.title;

//       const existingProduct = state.cart.find(
//         (item) => item.id === action.payload.id
//       );

//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       } else {
//         state.cart.push({
//           ...action.payload,
//           quantity: 1,
//         });
//       }
//     },

//     // Update Quantity
//     updateQuantity: (
//       state,
//       action: PayloadAction<UpdateQuantityPayload>
//     ) => {
//       const { id, quantity } = action.payload;

//       const product = state.cart.find((item) => item.id === id);

//       if (product) {
//         if (quantity <= 0) {
//           state.cart = state.cart.filter((item) => item.id !== id);

//           if (state.activeProductTitle === product.title) {
//             state.activeProductTitle = null;
//           }
//         } else {
//           product.quantity = quantity;
//         }
//       }
//     },

//     // Increase Quantity
//     increaseQuantity: (state, action: PayloadAction<number>) => {
//       const product = state.cart.find(
//         (item) => item.id === action.payload
//       );

//       if (product) {
//         product.quantity += 1;
//       }
//     },

//     // Decrease Quantity
//     decreaseQuantity: (state, action: PayloadAction<number>) => {
//       const product = state.cart.find(
//         (item) => item.id === action.payload
//       );

//       if (product && product.quantity > 1) {
//         product.quantity -= 1;
//       }
//     },

//     // Remove Product
//     removeFromCart: (state, action: PayloadAction<number>) => {
//       const product = state.cart.find(
//         (item) => item.id === action.payload
//       );

//       if (product && state.activeProductTitle === product.title) {
//         state.activeProductTitle = null;
//       }

//       state.cart = state.cart.filter(
//         (item) => item.id !== action.payload
//       );
//     },

//     // Clear Cart
//     clearCart: (state) => {
//       state.cart = [];
//       state.activeProductTitle = null;
//     },
//   },
// });

// export const {
//   addToCart,
//   updateQuantity,
//   increaseQuantity,
//   decreaseQuantity,
//   removeFromCart,
//   clearCart,
// } = shofySlice.actions;

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

interface UpdateQuantityPayload {
  id: number;
  quantity: number;
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
    // =========================
    // ADD TO CART
    // =========================
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
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

    // =========================
    // UPDATE QUANTITY
    // =========================
    updateQuantity: (
      state,
      action: PayloadAction<UpdateQuantityPayload>
    ) => {
      const { id, quantity } = action.payload;

      const product = state.cart.find((item) => item.id === id);

      if (product) {
        if (quantity <= 0) {
          state.cart = state.cart.filter(
            (item) => item.id !== id
          );
        } else {
          product.quantity = quantity;
        }
      }
    },

    // =========================
    // INCREASE QUANTITY
    // =========================
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.cart.find(
        (item) => item.id === action.payload
      );

      if (product) {
        product.quantity += 1;
      }
    },

    // =========================
    // DECREASE QUANTITY
    // =========================
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.cart.find(
        (item) => item.id === action.payload
      );

      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },

    // =========================
    // REMOVE FROM CART
    // =========================
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload
      );
    },

    // =========================
    // CLEAR CART
    // =========================
    clearCart: (state) => {
      state.cart = [];
    },

    // =========================
    // TOGGLE FAVORITE
    // =========================
    toggleFavorite: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.favorite.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        state.favorite = state.favorite.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.favorite.push(action.payload);
      }
    },

    // =========================
    // REMOVE FAVORITE
    // =========================
    removeFromFavorite: (state, action: PayloadAction<number>) => {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload
      );
    },

    // =========================
    // CLEAR FAVORITE
    // =========================
    clearFavorite: (state) => {
      state.favorite = [];
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
  toggleFavorite,
  removeFromFavorite,
  clearFavorite,
} = shofySlice.actions;

export default shofySlice.reducer;