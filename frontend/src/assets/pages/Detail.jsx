import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProducts, fetchSingleProduct } from "../features/Product";
import { addBasket } from "../features/Basket";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  //   console.log(id);

  const findProduct = products.find((product) => product._id === id);

  return (
    <div className="container-custom">
      <div className="card">
        <div className="card-image">
          <img src={findProduct?.image} alt={findProduct.name} width="200" />
        </div>
        <div className="card-body">
          <div className="card-title">
            <h2>{findProduct?.name}</h2>
          </div>
          <p>{findProduct?.description}</p>
          <p>${findProduct?.price}</p>
          <div className="card-btn">
            <button
              className="btn btn-succes"
              onClick={() => dispatch(addBasket(findProduct))}
            >
              Add basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
