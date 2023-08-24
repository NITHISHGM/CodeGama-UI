import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getProductsBasedOnID = createAsyncThunk(
  "GamaCart/getProductsBasedOnID",
  async (id) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const getProductsBasedOnIDSlice = createSlice({
  name: "productbasedonid",
  initialState: {
    data: [],
    status: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsBasedOnID.pending, (state) => {
        state.status = true;
      })
      .addCase(getProductsBasedOnID.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload;
      })
      .addCase(getProductsBasedOnID.rejected, (state, action) => {
        state.status = true;
        state.error = action.error.message;
      });
  },
});
export default getProductsBasedOnIDSlice.reducer;
