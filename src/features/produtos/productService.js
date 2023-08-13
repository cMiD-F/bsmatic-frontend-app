import axios from "axios";
import {base_url} from "../../utils/axiosConfig";

const getProdutos = async (userData) => {
    const response = await axios.get(`${base_url}produtos/`);
    if (response.data) {
        return response.data;
    }
};

export const productService = {
    getProdutos,
};