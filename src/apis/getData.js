import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const getData = async () => {
     const product = await axios.get(`${url}/products`)
     return product.data.products
};
