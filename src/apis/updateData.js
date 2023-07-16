import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const updateData = async (id, price, stock)=>{
     const data = await axios.put(`${url}/product/${id}`, {
          price: price,
          stock: stock
     })
     return data
}
 
