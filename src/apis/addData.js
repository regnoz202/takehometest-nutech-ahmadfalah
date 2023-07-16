import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const addData = async (title, price, stock, images) => {
     const dataBarang = {
          title: title,
          price: price,
          stock: stock,
          images: images
     }
     const add = await axios.post(`${url}/product/add`, dataBarang)
     return add.data
};
