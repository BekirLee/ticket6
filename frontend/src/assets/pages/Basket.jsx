import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBasket } from "../features/Basket";

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);
  useEffect(() => {
    console.log(basketItems);
  }, []);
  //   console.log(basketItems);

  //   if (!Array.isArray(basketItems)) {
  //     console.error("error basket isnot an array", basketItems);
  //     return <p>basket is boreken not working.</p>;
  //   }

  return (
    <>
      {basketItems.map((item) => (
        <div className="card" key={item._id}>
          <div className="card-image">
            <img src={item.image} alt="" />
          </div>
          <div className="card-body">
            <p>{item.name}</p>
            <p>Adet: {item.count}</p>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(removeBasket(item))}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Basket;
