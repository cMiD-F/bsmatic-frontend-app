import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/registro`, userData);
  if (response.data) {
    return response.data;
  }
};

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
  }
  return response.data;
};

const getUserWislist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  if (response.data) {
    return response.data;
  }
};

const addToCarrinho = async (carroData) => {
  const response = await axios.post(
    `${base_url}user/carrinho`, // Alteração aqui: trocar de axios.get para axios.post
    carroData,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const getCarrinho = async (data) => {
  const response = await axios.get(`${base_url}user/carrinho`, {
    params: data, // Aqui você passa os parâmetros de consulta
    ...config, // E aqui você passa outras configurações como headers, etc.
  });
  if (response.data) {
    return response.data;
  }
};

const removeProductFromCarrinho = async (data) => {
  const response = await axios.delete(
    `${base_url}user/delete-produto-carrinho/${data.id}`,
    data.config2
  );
  if (response.data) {
    return response.data;
  }
};

const updateProductFromCarrinho = async (cartDetail) => {
  const response = await axios.put(
    `${base_url}user/update-produto-carrinho/${cartDetail.cartItemId}/${cartDetail.quantidade}`,
    {}, // Passando um corpo vazio, pois o método PUT espera um corpo
    config
  );
  if (response.data) {
    return response.data;
  }
};

const createOrder = async (orderDetail) => {
  const response = await axios.post(
    `${base_url}user/carrinho/criar-pedidos/`,
    orderDetail,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const getUserPedidos = async () => {
  const response = await axios.get(`${base_url}user/meus-pedidos`, config);
  if (response.data) {
    return response.data;
  }
};

const updateUser = async (data) => {
  const response = await axios.put(
    `${base_url}user/edit-user`,
    data.data,
    data.config2
  );
  if (response.data) {
    return response.data;
  }
};

const forgotPasswordToken = async (data) => {
  const response = await axios.post(
    `${base_url}user/forgot-password-token`,
    data
  );
  if (response.data) {
    return response.data;
  }
};

const resetSenha = async (data) => {
  const response = await axios.put(
    `${base_url}user/reset-senha/${data.token}`,
    {
      senha: data?.senha,
    }
  );
  if (response.data) {
    return response.data;
  }
};
const emptyCarrinho = async (data) => {
  const response = await axios.delete(`${base_url}user/carrinho-vazio`, data);

  if (response.data) {
    return response.data;
  }
};

export const authService = {
  register,
  login,
  getUserWislist,
  addToCarrinho,
  getCarrinho,
  removeProductFromCarrinho,
  updateProductFromCarrinho,
  createOrder,
  getUserPedidos,
  updateUser,
  forgotPasswordToken,
  resetSenha,
  emptyCarrinho,
};
