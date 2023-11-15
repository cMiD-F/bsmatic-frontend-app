import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { productService } from "./productService";

export const getAllProdutos = createAsyncThunk(
  "produto/get",
  async (thunkAPI) => {
    try {
      return await productService.getProdutos();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productState = {
  produto: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const productSlice = createSlice({
  name: "produto",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProdutos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProdutos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.produto = action.payload;
      })
      .addCase(getAllProdutos.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      });
      
  },
});

export default productSlice.reducer;
