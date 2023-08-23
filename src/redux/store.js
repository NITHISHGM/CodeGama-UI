import { configureStore } from "@reduxjs/toolkit";
import getAllproductsSlice from "./slice/getAllProductsSlice";

export const store = configureStore({
  reducer: {
    allProducts: getAllproductsSlice,
  },
});
