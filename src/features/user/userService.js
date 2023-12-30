// userService.js
import axios from "axios";
import { getConfig } from "../../utils/axiosConfig";
import { base_url } from "../../utils/baseUrl";

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/registro`, userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
    return response.data;
  }
};

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
    return response.data;
  }
};

const addNoCarro = async (carroData) => {
  const response = await axios.post(
    `${base_url}user/carrinho`,
    carroData,
    getConfig()
  );
  if (response.data) {
    return response.data;
  }
};

const obtemCarro = async () => {
  const response = await axios.get(
    `${base_url}user/carrinho`,
    getConfig()
  );
  if (response.data) {
    return response.data;
  }
};

// const addProdutoNoCarrinho = async (produtoData) => {
//   const response = await axios.post(
//     `${base_url}user/carrinho`,
//     produtoData,
//     getConfig()
//   );
//   if (response.data) {
//     return response.data;
//   }
// };

export const authService = {
  register,
  login,
  addNoCarro,
  //addProdutoNoCarrinho,
  obtemCarro
};
