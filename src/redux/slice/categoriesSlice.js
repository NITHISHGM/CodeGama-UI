import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllCategories = createAsyncThunk(
  "GamaCart/getAllCategories",
  async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const getAllCategoriesSlcie = createSlice({
  name: "allcategories",
  initialState: {
    data: [],
    status: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.status = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.status = true;
        state.error = action.error.message;
      });
  },
});
export default getAllCategoriesSlcie.reducer;
