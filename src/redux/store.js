import { configureStore } from "@reduxjs/toolkit";
import getAllproductsSlice from "./slice/getAllProductsSlice";
import cartSlice from "./slice/cartSlice";
import categoriesSlice from "./slice/categoriesSlice";
import getProductsBasedOnIDSlice from "./slice/getProductsBasedOnIDSlice";

export const store = configureStore({
  reducer: {
    allProducts: getAllproductsSlice,
    cart: cartSlice,
    categories: categoriesSlice,
    singleProduct: getProductsBasedOnIDSlice,
  },
});
