import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";


const getProdutos = async (data) => {
  console.log(data);
  const response = await axios.get(
    `${base_url}produtos?${data?.marca ? `marca=${data?.marca}&&` : ""}${
      data?.tag ? `tags=${data?.tag}&&` : ""
    }${data?.categoria ? `categoria=${data?.categoria}&&` : ""}${
      data?.minPrice ? `valorBS[gte]=${data?.minPrice}&&` : ""
    }${data?.maxPrice ? `valorBS[lte]=${data?.maxPrice}&&` : ""}${
      data?.sort ? `sort=${data?.sort}&&` : ""
    }`
  );
  if (response.data) {
    return response.data;
  }
};

const getSingleProduto = async (id) => {
  const response = await axios.get(`${base_url}produtos/${id}`);
  if (response.data) {
    return response.data;
  }
};

export const addToWishlist = async (prodId) => {
  const response = await axios.put(
    `${base_url}produtos/wishlist`,
    { prodId },
    config
  );
  if (response.data) {
    return response.data;
  }
};


const rateProduto = async (data) => {
  const response = await axios.put(`${base_url}/produtos/raing`, data, config);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProdutos,
  getSingleProduto,
  addToWishlist,
  rateProduto,
};
