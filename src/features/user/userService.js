// Atualizações:
// - Corrigido o método `updateProductFromCart` para usar o método HTTP `PUT`.
// - Adicionado o método `getUser` para obter detalhes do usuário.

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
  const response = await axios.get(`${base_url}user/carrinho`, getConfig());
  if (response.data) {
    return response.data;
  }
};

const removeProductFromCart = async (carrinhoItemId) => {
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${carrinhoItemId}`,
    getConfig()
  );
  if (response.data) {
    return response.data;
  }
};

const updateProductInCart = async (cartDetail) => {
  const response = await axios.put(
    `${base_url}user/update-product-cart/${cartDetail.carrinhoItemId}`,
    { quantidade: cartDetail.quantidade },
    getConfig()
  );
  if (response.data) {
    return response.data;
  }
};

const createOrder = async (orderDetail) => {
  const response = await axios.post(
    `${base_url}user/carrinho/create-order`,
    orderDetail,
    getConfig()
  );
  if (response.data) {
    return response.data;
  }
};

const getUserOrders = async () => {
  const response = await axios.get(`${base_url}user/meus-pedidos`, getConfig());
  if (response.data) {
    return response.data;
  }
};

const updateUser = async (data) => {
  const response = await axios.put(
    `${base_url}user/edit-user`,
    data,
    getConfig()
  );
  if (response.data) {
    return response.data;
  }
};

const getUser = async () => {
  const response = await axios.get(`${base_url}user/me`, getConfig());
  if (response.data) {
    return response.data;
  }
};

export const authService = {
  register,
  login,
  addNoCarro,
  obtemCarro,
  removeProductFromCart,
  updateProductInCart,
  createOrder,
  getUserOrders,
  updateUser,
  getUser,
};
