import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import produtoReducer from "../features/produtos/productSlice";

export const store = configureStore({
  reducer: {
    auth:authReducer,
    produto: produtoReducer,
  },
});
