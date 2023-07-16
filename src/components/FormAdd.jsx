import React from "react";
import Button from "./Button";

export default function FormAdd(props) {
 
  return (
    <form onSubmit={props.onSubmit}>
      <div class="mb-6">
        <label
          for="large-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nama Produk
        </label>
        <input
          onChange={props.handleInput}
          value={props.stateTitle}
          name="title"
          type="text"
          id="large-input"
          class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Harga
        </label>
        <input
          onChange={props.handleInput}
          value={props.statePrice}
          name="price"
          type="number"
          id="base-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          for="small-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Stock
        </label>
        <input
          onChange={props.handleInput}
          value={props.stateStock}
          name="stock"
          type="number"
          id="small-input"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
     <p className="flex pt-5">Masukkan Gambar:</p>
      <img src={props.hasilImage} alt="" />
      <input type="file" className="w-full max-w-xs mt-2 file-input" onChange={props.handleUpload}/>
    </div>
    <Button string="Update" />
    </form>
  );
}
