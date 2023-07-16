import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import { getData } from "../apis/getData";
import Search from "./Search";
import { searchData } from "../apis/searchData";

export default function Grid() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setProduct(res);
    });
  }, []);

  const ListProduct = useCallback(() => {
    return products.map((product, i) => {
      return (
        <div key={i}>
          <Card
            title={product.title}
            price={product.price}
            image={product.images[0]}
            id={product.id}
          />
        </div>
      );
    });
  });

  const searchQuery = async (q) => {
    if (q.length > 3) {
      const query = await searchData(q);
      setProduct(query)
    }
  };
  
  return (
    <>
      <div className="max-w-2xl py-5 mx-auto mt-5">
        <Search query={({ target }) => searchQuery(target.value)} />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 max-md:grid-cols-1 max-sm:grid-cols-1 sm:grid-cols-1">
        <ListProduct />
      </div>
    </>
  );
}
