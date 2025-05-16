import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  searchProduct,
  sortAZ,
  sortZA,
} from "../features/Product";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [findProduct, setFindProduct] = useState("");
  const handleSearch = (e) => {
    let value = e.target.value;
    setFindProduct(value);
    dispatch(searchProduct(value));
  };

  return (
    <div>
      <input type="text" value={findProduct} onChange={handleSearch} />
      <button onClick={() => dispatch(sortAZ())}>AZ</button>
      <button onClick={() => dispatch(sortZA())}>ZA</button>

      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
