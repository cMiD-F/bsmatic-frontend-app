import axios from "axios";
import {base_url} from "../../utils/baseUrl";

const getProdutos = async (userData) => {
    const response = await axios.get(`${base_url}produtos/`);
    if (response.data) {
        return response.data;
    }
};

const getProdutoUnico = async (id) => {
    const response = await axios.get(`${base_url}produtos/${id}`);
    if (response.data) {
        return response.data;
    }
};

export const productService = {
    getProdutos,
    getProdutoUnico,
};