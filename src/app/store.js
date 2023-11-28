import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import produtoReducer from "../features/produtos/productSlice";
import blogReducer from "../features/blogs/blogSlice"
import contatoReducer from "../features/contato/contatoSlice";

export const store = configureStore({
  reducer: {
    auth:authReducer,
    produto: produtoReducer,
    blog: blogReducer,
    contato: contatoReducer
  },
});
