import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSingleProduct } from "../features/Product";
import { addBasket } from "../features/Basket";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.singleProduct);
  console.log(product);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);
  console.log(id);

  return (
    <div className="container-custom">
      <div className="card">
        <div className="card-image">
          <img src={product.image} alt={product.name} width="200" />
        </div>
        <div className="card-body">
          <div className="card-title">
            <h2>{product.name}</h2>
          </div>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <div className="card-btn">
            <button
              className="btn btn-succes"
              onClick={() => dispatch(addBasket(product))}
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
