import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FormAdd from "../components/FormAdd";
import axios from "axios";
// import { addData } from "../apis/addData";

export default function Adding() {
  const [image, setImage] = useState()
  const [activeNew, setActiveNew] = useState(false)
  const [formValue, setFormValue] = useState({
    id: null,
    title: "",
    price: null,
    stock: null,
    images: ""
  });

  const handleUploadImage = (e) => {
    let uploaded = e.target.files[0]
    setImage(URL.createObjectURL(uploaded))
    console.log(e.target.files[0])
    console.log(image)
  }

  const handleInput = (e) => {
    const {name, value} = e.target;
    setFormValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const url = import.meta.env.VITE_BASE_URL;
  const addData = async () => {
    const dataBarang = {
         id: formValue.id,
         title: formValue.title,
         price: formValue.price,
         stock: formValue.stock,
         images: image
    }
    const add = await axios.post(`${url}/product/add`, dataBarang)
    return add.data
};

  const handleSubmit = (e)=>{
    e.preventDefault()
    addData()
    setActiveNew(!activeNew)
    console.log(addData());
  }

  return (
    <>
      <Navbar />
      {activeNew && (
        <div className="max-w-2xl mx-auto mt-10">
        Barang baru
        <p className="mt-5">Nama Barang:</p>
        <p>{formValue.title}</p>
        <p className="mt-5">Nama Barang:</p>
        <p>{formValue.price}</p>
        <p className="mt-5">Nama Barang:</p>
        <p>${formValue.stock}</p>
        <h2 className="mt-8 font-bold ">Penambahan barang dapat dilihat pada console</h2>
      </div>
      )}
      <div className="max-w-2xl p-4 mx-auto mt-20">
      <h1 className="my-5 font-bold">FORM TAMBAH BARANG</h1>
        <FormAdd handleInput={handleInput} onSubmit={handleSubmit} handleUpload={handleUploadImage} hasilImage={image}/>
      </div>
    </>
  );
}
