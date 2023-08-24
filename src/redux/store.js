import { configureStore } from "@reduxjs/toolkit";
import getAllproductsSlice from "./slice/getAllProductsSlice";
import cartSlice from "./slice/cartSlice";
import categoriesSlice from "./slice/categoriesSlice";

export const store = configureStore({
  reducer: {
    allProducts: getAllproductsSlice,
    cart: cartSlice,
    categories: categoriesSlice,
  },
});
