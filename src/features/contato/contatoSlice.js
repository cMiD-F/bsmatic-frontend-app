import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {contatoService} from "../contato/contatoService"

export const createQuery = createAsyncThunk(
  "contato/post",
  async (contatoData,thunkAPI) => {
    try {
      return await contatoService.postQuery(contatoData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const contatoState = {
  contato: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const contatoSlice = createSlice({
  name: "contato",
  initialState: contatoState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contato = action.payload;
        if (state.isSuccess === true){
            toast.success("Formulário de contato enviado com sucesso!")
        }
      })
      .addCase(createQuery.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true){
            toast.success("Algo deu errado!")
        }
      });
      
  },
});

export default contatoSlice.reducer;
