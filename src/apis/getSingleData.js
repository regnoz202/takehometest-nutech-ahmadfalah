import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const getSingleData = async (id) => {
     const product = await axios.get(`${url}/products/${id}`)
     return product.data
};
