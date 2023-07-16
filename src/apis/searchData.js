import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const searchData = async (q) => {
     const search = await axios.get(`${url}/products/search?q=${q}`)
     return search.data.products
};
