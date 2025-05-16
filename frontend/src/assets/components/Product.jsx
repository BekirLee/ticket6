import React from "react";
import { useDispatch } from "react-redux";
import { addBasket } from "../features/Basket";
import { Link, useNavigate } from "react-router";
import "./product.css";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToBasket = () => {
    dispatch(addBasket(product));
  };

  return (
    <div className="singleCard">
      <div
        className="cardImage"
        onClick={() => navigate(`/detail/${product._id}`)}
      >
        <img src={product.image} alt="" />
      </div>
      <div className="cardBody">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
      <button className="btn btn-primary" onClick={handleAddToBasket}>
        add to basket
      </button>
    </div>
  );
};

export default Product;
