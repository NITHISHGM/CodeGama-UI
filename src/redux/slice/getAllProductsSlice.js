import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllProducts = createAsyncThunk(
  "GamaCart/getAllProducts",
  async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getProductsByCategory = createAsyncThunk(
  "GamaCart/getProductsByCategory",
  async (category) => {
    try {
      if (category === "ALL") {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        return response.data;
      } else {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);

const getAllProductsSlice = createSlice({
  name: "allproducts",
  initialState: {
    data: [],
    status: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = true;
        state.error = action.error.message;
      })
      .addCase(getProductsByCategory.pending, (state) => {
        state.status = true;
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload;
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.status = true;
        state.error = action.error.message;
      });
  },
});
export default getAllProductsSlice.reducer;
