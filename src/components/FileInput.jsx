import React from "react";

export default function FileInput() {
  return (
    <div>
     <p className="pt-5">Masukkan Gambar:</p>
      <input type="file" className="w-full max-w-xs mt-2 file-input" />
    </div>
  );
}
