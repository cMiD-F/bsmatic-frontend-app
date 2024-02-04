// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

export const registraUser = createAsyncThunk(
  "auth/registro",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.login(userData);
      localStorage.setItem("token", response.token); // Persistindo o token no localStorage
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addProdutoNoCarrinho = createAsyncThunk(
  "user/carrinho/addProduto",
  async (produtoData, thunkAPI) => {
    try {
      return await authService.addNoCarro(produtoData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserCarrinho = createAsyncThunk(
  "user/carrinho/get",
  async (thunkAPI) => {
    try {
      return await authService.obtemCarro();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createAnOrder = createAsyncThunk(
  "user/order/create",
  async (data, thunkAPI) => {
    try {
      return await authService.createOrder(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOrders = createAsyncThunk(
  "user/order/get",
  async (thunkAPI) => {
    try {
      return await authService.getUserOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteCartProduct = createAsyncThunk(
  "user/carrinho/produto/delete",
  async (carrinhoItemId, thunkAPI) => {
    try {
      return await authService.removeProductFromCart(carrinhoItemId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateCartProduct = createAsyncThunk(
  "user/carrinho/produto/update",
  async (cartDetail, thunkAPI) => {
    try {
      return await authService.updateProductFromCart(cartDetail);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/profile/update",
  async (data, thunkAPI) => {
    try {
      return await authService.updateUser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getCustomerFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState = {
  user: getCustomerFromLocalStorage,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  errorDetails: null,
  carrinho: [], // Adicione esta linha para armazenar produtos no carrinho
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registraUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registraUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        if (state.isSuccess === true) {
          toast.info("Usuário criado com sucesso!");
        }
      })
      .addCase(registraUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error);
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess === true) {
          localStorage.setItem("token", action.payload.token);
          toast.info("Usuário logado com sucesso!");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error);
        }
      })
      .addCase(addProdutoNoCarrinho.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProdutoNoCarrinho.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.carrinho.push(action.payload);
        toast.success("Produto adicionado ao carrinho");
      })
      .addCase(addProdutoNoCarrinho.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        toast.error(action.error);
      })
      .addCase(getUserCarrinho.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCarrinho.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.carrinhoProdutos = action.payload;
      })
      .addCase(getUserCarrinho.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        toast.error(action.error);
      })
      .addCase(deleteCartProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deleteCarroProduto = action.payload;
        toast.success("Produto excluido do carrinho com sucesso!");
        // if (state.isSuccess) {
        //   toast.success("Produto excluido do carrinho com sucesso!");
        // }
      })
      .addCase(deleteCartProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isSuccess === false) {
          toast.success("Algo deu errado!");
        }
      })
      .addCase(updateCartProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedCarroProduto = action.payload;
        if (state.isSuccess) {
          toast.success("Produto atualizado no carrinho com sucesso!");
        }
      })
      .addCase(updateCartProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isSuccess === false) {
          toast.success("Algo deu errado!");
        }
      })
      .addCase(createAnOrder.pending, (state) =>{
        state.isLoading=true;
      }).addCase(createAnOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError=false;
        state.isSuccess = true;
        state.orderedProduct = action.payload;
        if(state.isError) {
          toast.success("Ordered Successfully")
        }
      }).addCase(createAnOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if(state.isSuccess === false){
          toast.error("Something Went Wrong!")
        }
      })
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.getorderedProduto = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateProfile.pending, (state) =>{
        state.isLoading=true;
      }).addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError=false;
        state.isSuccess = true;
        state.updatedUser = action.payload;
        toast.success("Perfil atualizado com sucesso!");
        // if (state.isSuccess) {
        //   toast.info("Perfil atualizado com sucesso!");
        // }
      
      }).addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if(state.isSuccess === false){
          toast.error("Something Went Wrong!")
        }
      });
  },
});

export default authSlice.reducer;

