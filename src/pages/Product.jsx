import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { getSingleData } from "../apis/getSingleData";
import { useParams } from "react-router-dom";
import ModalDelete from "../components/ModalDelete";
import { deleteData } from "../apis/deleteData";
import { updateData } from "../apis/updateData";

export default function Product() {
  const [single, setSingle] = useState(0);
  const [deleteItem, setDeleteItem] = useState("");
  const [deleteActive, setDeleteActive] = useState(false);
  const [updateActive, setUpdateActive] = useState(false)
  const [newValue, setNewValue] = useState({
    price: null,
    stock: null
  });

  const { id } = useParams();

  useEffect(() => {
    getSingleData(id).then((res) => {
      setSingle(res);
    });
  }, []);

  const handleInput = (e) => {
    const {name, value} = e.target;
    setNewValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleDelete = () => {
    deleteData(id).then((res) => {
      setDeleteItem(res);
      setDeleteActive(!deleteActive);
    });
  };

  const handleSubmit = () => {
    updateData(id, newValue.price, newValue.stock)
    setUpdateActive(!updateActive)
  };


  return (
    <>
      <Navbar />
      <div className="flex max-w-full mx-auto mt-10">
        <img
          className="max-w-md ml-60 rounded-xl max-h-md"
          src={single.thumbnail}
          alt="images"
        />
        <div className="mt-5 ml-20">
          <h1>{single.title}</h1>
          <p className="mt-20">{single.description}</p>
          <p className="m-5 font-bold">Price: ${single.price}</p>
          <p className="m-5">Stok: {single.stock}</p>
          {updateActive && (<div>
            <p>Stock Terbaru: {newValue.stock}</p>
            <p>Harga Terbaru: {newValue.price}</p>
          </div>)}
          <div className="m-5">
            <label htmlFor="">Masukan Stok Terbaru: </label>
            <input type="number" name="stock" onChange={handleInput}/>
          </div>
          <div className="m-5">
            <label htmlFor="">Update Harga Barang: </label>
            <input type="number" name="price" onChange={handleInput}/>
          </div>
          <div>
            {deleteActive && (
              <div>
                <p>Delete On Date: {deleteItem.deletedOn}</p>
                <p>Item Sudah Terdelete</p>
                <p className="font-bold">
                  Ini hanya simulasi karena menggunakan public API
                </p>
              </div>
            )}
          </div>
          <Button string="Update Stock" click={handleSubmit}/>
          <ModalDelete click={handleDelete} />
        </div>
      </div>
    </>
  );
}
