import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10">
        <h1 className="font-bold">NOTE DARI SAYA</h1>
        <div>
          <ul className="font-medium">
            <li>
              sebelumnya pada test ini saya tidak menggunakan redux dikarenakan
              keterbatasan waktu dan belum begitu paham cara implementasinya
              tetapi saya sudah tau alurnya
            </li>
            <br />
            <li>
              kemudian tentang CRUD, saya menggunakan public API dengan domain:
              https://dummyjson.com/ untuk mempersingkat waktu, dikarenakan spek
              dari API-nya sedikit berbeda yang pada soal disebutkan harus ada
              harga jual dan harga beli, sedangkan pada aplikasi ini saya hanya
              membuatnya menjadi satu harga
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
