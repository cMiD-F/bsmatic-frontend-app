import axios from "axios";
import {base_url} from "../../utils/baseUrl";

const postQuery = async (contatoData) => {
    const response = await axios.post(`${base_url}pergunta/`, contatoData);
    if (response.data) {
        return response.data;
    }
};

export const contatoService = {
    postQuery,
};