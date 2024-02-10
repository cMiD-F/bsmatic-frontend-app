import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { productService } from "../produtos/productService";


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

export const getAProduto = createAsyncThunk(
  "produto/getAProduto",
  async (id, thunkAPI) => {
    try {
      return await productService.getSingleProduto(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "produto/wishlist",
  async (prodId, thunkAPI) => {
    try {
      return await productService.addToWishlist(prodId);
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

export const addRating = createAsyncThunk(
  "produto/rating",
  async (data, thunkAPI) => {
    try {
      return await productService.rateProduto(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
      })
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.message = "Produto adicionado à lista de desejos!";
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAProduto.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAProduto.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleproduto = action.payload;
        state.message = "Produto obtido com sucesso";
      })
      .addCase(getAProduto.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addRating.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isError = true;
        state.rating = action.payload;
        state.message = "Classificação adicionada com sucesso";
        if (state.isError) {
          toast.success("Classificação adicionada com sucesso");
        }
      })
      .addCase(addRating.rejected, (state, action) => {
        state.isError = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default productSlice.reducer;
