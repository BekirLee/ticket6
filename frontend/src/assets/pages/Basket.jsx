import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Basket = () => {
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
    <div>
      {basketItems.map((item) => (
        <div key={item._id}>
          <p>{item.name}</p>
          <p>Adet: {item.count}</p>
        </div>
      ))}
    </div>
  );
};

export default Basket;
