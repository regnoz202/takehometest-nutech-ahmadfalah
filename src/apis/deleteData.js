import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const deleteData = async (id) => {
     const product = await axios.delete(`${url}/products/${id}`)
     return product.data
};
