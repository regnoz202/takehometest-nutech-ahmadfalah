import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Grid from "../components/Grid";
import ModalDelete from "../components/ModalDelete";

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <div className="max-w-full px-5 pt-4 pl-24 mx-auto max-sm:pl-0">
        <Grid />
      </div>
    </div>
  );
}
