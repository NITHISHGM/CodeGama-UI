import { configureStore } from "@reduxjs/toolkit";
import getAllproductsSlice from "./slice/getAllProductsSlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    allProducts: getAllproductsSlice,
    cart: cartSlice,
  },
});
